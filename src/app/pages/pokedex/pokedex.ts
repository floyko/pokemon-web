import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from "@angular/core";
import { Card } from "@app/components/card/card";
import { PokemonSearchModal } from "@app/components/pokemon-search-modal/pokemon-search-modal";
import { SearchBar } from "@app/components/search-bar/search-bar";
import { PokemonCard, PokemonListItem } from "@app/models/pokemon";
import { PokemonService } from "@app/services/pokemon.service";

@Component({
  imports: [Card, SearchBar, PokemonSearchModal],
  selector: "app-pokedex",
  styleUrl: "./pokedex.scss",
  templateUrl: "./pokedex.html",
})
export class Pokedex implements OnInit {
  private pokemonService: PokemonService = inject(PokemonService);
  pokemon: WritableSignal<PokemonCard[]> = signal<PokemonCard[]>([]);
  currentPage: WritableSignal<number> = signal<number>(1);
  pageSize: WritableSignal<number> = signal<number>(20);
  pokemonCount: WritableSignal<number> = this.pokemonService.pokemonCount;
  searchResults: WritableSignal<PokemonCard[]> = signal<PokemonCard[]>([]);
  searchSuggestions: WritableSignal<PokemonListItem[]> = signal<PokemonListItem[]>([]);
  searchModal: Signal<PokemonSearchModal> = viewChild.required(PokemonSearchModal);

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.pokemonService.getPokemonPage(this.currentPage(), this.pageSize()).subscribe({
      next: (cards) => {
        this.pokemon.set(cards);
      },
      error: (error) => {
        console.error("Failed to load Pokémon:", error);
      },
    });
  }

  get totalPages(): number {
    return Math.ceil(this.pokemonCount() / this.pageSize());
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update((page) => page + 1);
      this.loadPage();
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
      this.loadPage();
    }
  }

  changePageSize(size: string): void {
    this.pageSize.set(Number(size));
    this.currentPage.set(1);
    this.loadPage();
  }

  searchPokemon(searchTerm: string): void {
    this.pokemonService.searchPokemonCards(searchTerm).subscribe((cards) => {
      this.searchResults.set(cards);
      this.searchModal().open();
    });
  }

  onSearchChanged(searchTerm: string): void {
    this.searchSuggestions.set(
      searchTerm ? this.pokemonService.getPokemonSuggestions(searchTerm) : [],
    );
  }

  selectSuggestion(pokemon: PokemonListItem): void {
    this.pokemonService.getPokemonCardByUrl(pokemon.url).subscribe({
      next: (card) => {
        this.searchModal().showPokemon(card);
      },
      error: (error) => {
        console.error("Failed to load Pokémon:", error);
      },
    });
  }
}
