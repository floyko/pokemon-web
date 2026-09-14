import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { PokemonCard } from '../../models/pokemon';
import { POKEMON_DATA } from '../../components/card/example';

@Component({
  imports: [Card],
  selector: 'app-pokedex',
  styleUrl: './pokedex.scss',
  templateUrl: './pokedex.html',
})
export class Pokedex {
  pokemon: PokemonCard[] = POKEMON_DATA;
}
