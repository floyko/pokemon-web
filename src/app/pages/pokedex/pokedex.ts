import { Component, inject, OnInit, Signal, signal, viewChild, WritableSignal } from "@angular/core";
import { Card } from "../../components/card/card";
import { PokemonCard } from "../../models/pokemon";
import { PokemonService } from "../../services/pokemon.service";
import { SearchBar } from "../../components/search-bar/search-bar";
import { PokemonSearchModal } from "../../components/pokemon-search-modal/pokemon-search-modal";

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
  searchResult: WritableSignal<PokemonCard | undefined> = signal<PokemonCard | undefined>(undefined);
  searchModal: Signal<PokemonSearchModal> = viewChild.required(PokemonSearchModal);

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.pokemonService
      .getPokemonPage(this.currentPage(), this.pageSize())
      .subscribe({
        next: cards => {
          this.pokemon.set(cards);
        },
        error: error => {
          console.error(
            "Failed to load Pokémon:",
            error
          );
        }
      });

  }

  get totalPages(): number {
    return Math.ceil(this.pokemonCount() / this.pageSize());
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update(page => page + 1);
      this.loadPage();
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
      this.loadPage();
    }
  }

  changePageSize(size: string): void {
    this.pageSize.set(Number(size));
    this.currentPage.set(1);
    this.loadPage();
  }

  searchPokemon(searchTerm: string): void {
    this.pokemonService
      .getPokemonBySearch(searchTerm)
      .subscribe(card => {
        this.searchResult.set(card);
        this.searchModal().open();
      });
  }
}