import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { PokemonCard, PokemonCardResponse, PokemonListItem, PokemonListResponse } from "../models/pokemon";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { forkJoin, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private cardCache: Map<number, PokemonCard> = new Map<number, PokemonCard>();
  private http: HttpClient = inject(HttpClient);
  private getPokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";
  readonly pokemonCount: WritableSignal<number> = signal<number>(0);
  private pokemonList: PokemonListItem[] = [];
  private spriteFrontDefaultUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor() {
    this.loadCardCache();
  }

  getPokemonList(): Observable<PokemonListResponse> {
    const cached = localStorage.getItem("pokemon-list");
    if (cached) {
      const data = JSON.parse(cached);
      this.pokemonList = data.results;
      this.pokemonCount.set(data.count);
      return of(data);
    }

    return this.http
      .get<PokemonListResponse>(
        `${this.getPokemonUrl}?offset=0&limit=1351`
      )
      .pipe(
        tap(data => {
          this.pokemonList = data.results;
          this.pokemonCount.set(data.count);
          localStorage.setItem(
            "pokemon-list",
            JSON.stringify(data)
          );
        })
      );
  }

  getPokemonPage(page: number, pageSize: number): Observable<PokemonCard[]> {
    return this.getPokemonList().pipe(
      switchMap(() => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const pageItems = this.pokemonList.slice(
          startIndex,
          endIndex
        );
        const requests = pageItems.map(pokemon => {
          const id = this.getPokemonId(pokemon.url);
          const cachedCard = this.cardCache.get(id);

          if (cachedCard) {
            console.log("Using cache:", id);
            return of(cachedCard);
          }
          console.log("Calling API:", id);
          return this.getPokemonCard(pokemon.url);
        });
        return forkJoin(requests);
      })
    );
  }

  getPokemonSuggestions(searchTerm: string): PokemonListItem[] {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return [];
    }

    return this.pokemonList
      .filter(pokemon =>
        pokemon.name.toLowerCase().startsWith(term)
      )
      .slice(0, 8);
  }

  findPokemonMatches(searchTerm: string): PokemonListItem[] {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return [];
    }

    return this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term)
    );
  }

  searchPokemonCards(searchTerm: string): Observable<PokemonCard[]> {
    const matches = this.findPokemonMatches(searchTerm).slice(0, 20);

    if (matches.length === 0) {
      return of([]);
    }

    const requests = matches.map(pokemon => {
      const id = this.getPokemonId(pokemon.url);
      const cachedCard = this.cardCache.get(id);

      if (cachedCard) {
        return of(cachedCard);
      }

      return this.getPokemonCard(pokemon.url);
    });

    return forkJoin(requests);
  }

  getPokemonCardByUrl(url: string): Observable<PokemonCard> {
    const id = this.getPokemonId(url);
    const cachedCard = this.cardCache.get(id);

    if (cachedCard) {
      return of(cachedCard);
    }

    return this.getPokemonCard(url);
  }

  getSpriteUrl(pokemon: PokemonListItem): string {
    const id = this.getPokemonId(pokemon.url);

    return `${this.spriteFrontDefaultUrl}${id}.png`;
  }

  private loadCardCache(): void {
    const cached = localStorage.getItem("pokemon-cards");
    if (!cached) {
      return;
    }

    const cards = JSON.parse(cached) as Record<string, PokemonCard>;
    this.cardCache = new Map(
      Object.entries(cards).map(([id, card]) => [
        Number(id),
        card
      ])
    );
  }

  private getPokemonCard(url: string): Observable<PokemonCard> {
    return this.http
      .get<PokemonCardResponse>(url)
      .pipe(
        map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          sprites: {
            frontDefault: pokemon.sprites.front_default
          },
          types: pokemon.types,
        })),
        tap(card => {
          this.cardCache.set(card.id, card);

          localStorage.setItem(
            "pokemon-cards",
            JSON.stringify(Object.fromEntries(this.cardCache))
          );
        }),
        catchError(error => {
          console.error("Pokemon API failed:", url, error);
          throw error;
        })
      );
  }

  private getPokemonId(url: string): number {
    const parts = url.split("/");
    return Number(parts[parts.length - 2]);
  }
}