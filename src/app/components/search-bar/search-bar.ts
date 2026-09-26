import {
  Component,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from "@angular/core";
import { PokemonListItem } from "@app/models/pokemon";
import { PokemonService } from "@app/services/pokemon.service";
import { LucideSearch, LucideX } from "@lucide/angular";

@Component({
  imports: [LucideSearch, LucideX],
  selector: "app-search-bar",
  styleUrl: "./search-bar.scss",
  templateUrl: "./search-bar.html",
})
export class SearchBar {
  private pokemonService: PokemonService = inject(PokemonService);
  suggestions: InputSignal<PokemonListItem[]> = input<PokemonListItem[]>([]);
  pokemonSelected: OutputEmitterRef<PokemonListItem> = output<PokemonListItem>();
  searchChanged: OutputEmitterRef<string> = output<string>();
  searchSubmitted: OutputEmitterRef<string> = output<string>();
  searchTerm: WritableSignal<string> = signal<string>("");

  onInput(): void {
    this.searchChanged.emit(this.searchTerm());
  }

  onSearch(): void {
    const term = this.searchTerm().trim();

    if (!term) {
      return;
    }
    this.searchSubmitted.emit(term);
  }

  clearSearch(): void {
    this.searchTerm.set("");
    this.searchChanged.emit("");
  }

  selectSuggestion(pokemon: PokemonListItem): void {
    this.searchTerm.set(pokemon.name);
    this.searchChanged.emit("");
    this.pokemonSelected.emit(pokemon);
  }

  getSpriteUrl(pokemon: PokemonListItem): string {
    return this.pokemonService.getSpriteUrl(pokemon);
  }
}
