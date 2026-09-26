import {
  Component,
  ElementRef,
  input,
  InputSignal,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from "@angular/core";
import { getPokemonTypeClass } from "@app/constants/pokemon-types";
import { PokemonCard } from "@app/models/pokemon";
import { LucideX } from "@lucide/angular";

@Component({
  imports: [LucideX],
  selector: "app-pokemon-search-modal",
  styleUrl: "./pokemon-search-modal.scss",
  templateUrl: "./pokemon-search-modal.html",
})
export class PokemonSearchModal {
  searchResults: InputSignal<PokemonCard[]> = input<PokemonCard[]>([]);
  selectedPokemon: WritableSignal<PokemonCard | undefined> = signal<PokemonCard | undefined>(
    undefined,
  );
  dialog: Signal<ElementRef<HTMLDialogElement>> =
    viewChild.required<ElementRef<HTMLDialogElement>>("dialog");
  getPokemonTypeClass = getPokemonTypeClass;

  open(): void {
    this.selectedPokemon.set(undefined);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  selectPokemon(pokemon: PokemonCard): void {
    this.selectedPokemon.set(pokemon);
  }

  showPokemon(pokemon: PokemonCard): void {
    this.selectedPokemon.set(pokemon);
    this.dialog().nativeElement.showModal();
  }
}
