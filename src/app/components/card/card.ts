import { Component, input, InputSignal } from "@angular/core";
import { PokemonCard } from "../../models/pokemon";
import { POKEMON_TYPE_CLASSES } from "../../constants/pokemon-types";

@Component({
  imports: [],
  selector: "app-card",
  styleUrl: "./card.scss",
  templateUrl: "./card.html",
})
export class Card {
  pokemon: InputSignal<PokemonCard> = input.required<PokemonCard>();

  getTypeClass(type: string): string {
    return POKEMON_TYPE_CLASSES[type] ?? "type-normal";
  }
}