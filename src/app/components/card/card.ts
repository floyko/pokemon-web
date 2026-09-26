import { Component, input, InputSignal } from "@angular/core";
import { PokemonCard } from "../../models/pokemon";
import { getPokemonTypeClass } from "../../constants/pokemon-types";

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