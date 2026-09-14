import { PokemonCard } from "../../models/pokemon";

export const POKEMON_DATA: PokemonCard[] = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      "frontDefault": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    types: [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ]
  }
];