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
  currentPage = 1;
  pageSize = 20;

  get paginatedPokemon(): PokemonCard[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.pokemon.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.pokemon.length / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
