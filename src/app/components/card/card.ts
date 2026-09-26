import { Component, input, InputSignal } from "@angular/core";
import { getPokemonTypeClass } from "@app/constants/pokemon-types";

import { PokemonCard } from "@app/models/pokemon";

@Component({
  imports: [],
  selector: "app-card",
  styleUrl: "./card.scss",
  templateUrl: "./card.html",
})
export class Card {
  pokemon: InputSignal<PokemonCard> = input.required<PokemonCard>();
  getPokemonTypeClass = getPokemonTypeClass;
}
