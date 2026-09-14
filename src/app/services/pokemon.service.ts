import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from '../models/pokemon';

@Service()
export class PokemonService {
    private http = inject(HttpClient);
    private getPokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

    getPokemon(name: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(this.getPokemonUrl + name);
    }
}