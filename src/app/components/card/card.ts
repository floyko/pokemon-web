import { Component, input } from '@angular/core';
import { PokemonCard } from '../../models/pokemon';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {
  pokemon = input.required<PokemonCard>();
}