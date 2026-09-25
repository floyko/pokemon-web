import { Component, ElementRef, input, InputSignal, viewChild } from "@angular/core";
import { PokemonCard } from "../../models/pokemon";
import { POKEMON_TYPE_CLASSES } from "../../constants/pokemon-types";
import { LucideX } from "@lucide/angular";

@Component({
  imports: [LucideX],
  selector: "app-pokemon-search-modal",
  styleUrl: "./pokemon-search-modal.scss",
  templateUrl: "./pokemon-search-modal.html",
})
export class PokemonSearchModal {
  pokemon: InputSignal<PokemonCard | undefined> = input<PokemonCard | undefined>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>("dialog");

  open(): void {
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  getTypeClass(type: string): string {
    return POKEMON_TYPE_CLASSES[type] ?? "type-normal";
  }
}