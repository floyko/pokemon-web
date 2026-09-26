export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  gameIndices: VersionGameIndex[];
  heldItems: PokemonHeldItem[];
  locationAreaEncounters: string;
  moves: PokemonMove[];
  pastTypes: PokemonTypePast[];
  pastAbilities: PokemonAbilityPast[];
  pastStats: PokemonStatPast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonCard {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonCardResponse {
  id: number;
  name: string;
  sprites: PokemonSpritesResponse;
  types: PokemonType[];
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  isHidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface VersionGameIndex {
  gameIndex: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  versionDetails: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonMove {
  move: NamedAPIResource;
  versionGroupDetails: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  moveLearnMethod: NamedAPIResource;
  versionGroup: NamedAPIResource;
  levelLearnedAt: number;
  order?: number | null;
}

export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonAbilityPast {
  generation: NamedAPIResource;
  abilities: PokemonAbility[];
}

export interface PokemonStatPast {
  generation: NamedAPIResource;
  stats: PokemonStat[];
}

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  baseStat: number;
}

export interface PokemonSprites {
  frontDefault: string | null;
  frontShiny?: string | null;
  frontFemale?: string | null;
  frontShinyFemale?: string | null;
  backDefault?: string | null;
  backShiny?: string | null;
  backFemale?: string | null;
  backShinyFemale?: string | null;
  // other: PokemonOtherSprites;
  // versions: PokemonSpriteVersions;
}

export interface PokemonSpritesResponse {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  // other: PokemonOtherSprites;
  // versions: PokemonSpriteVersions;
}

export interface PokemonOtherSprites {
  dreamWorld: PokemonDreamWorldSprites;
  home: PokemonHomeSprites;
  officialArtwork: PokemonOfficialArtworkSprites;
  showdown: PokemonShowdownSprites;
}

export interface PokemonDreamWorldSprites {
  frontDefault?: string | null;
  frontFemale?: string | null;
}

export interface PokemonHomeSprites {
  frontDefault?: string | null;
  frontFemale?: string | null;
  frontShiny?: string | null;
  frontShinyFemale?: string | null;
}

export interface PokemonOfficialArtworkSprites {
  frontDefault?: string | null;
  frontShiny?: string | null;
}

export interface PokemonShowdownSprites {
  backDefault?: string | null;
  backFemale?: string | null;
  backShiny?: string | null;
  backShinyFemale?: string | null;
  frontDefault?: string | null;
  frontFemale?: string | null;
  frontShiny?: string | null;
  frontShinyFemale?: string | null;
}

export interface PokemonSpriteVersions {
  generationI: PokemonGenerationISprites;
  generationII: PokemonGenerationIISprites;
  generationIII: PokemonGenerationIIISprites;
  generationIV: PokemonGenerationIVSprites;
  generationV: PokemonGenerationVSprites;
  generationVI: PokemonGenerationVISprites;
  generationVII: PokemonGenerationVIISprites;
  generationVIII: PokemonGenerationVIIISprites;
}

export interface PokemonGenerationISprites {
  redBlue: PokemonRedBlueSprites;
  yellow: PokemonYellowSprites;
}

export interface PokemonGenerationIISprites {
  crystal: PokemonVersionSprites;
  gold: PokemonVersionSprites;
  silver: PokemonVersionSprites;
}

export interface PokemonGenerationIIISprites {
  emerald: PokemonVersionSprites;
  fireredLeafgreen: PokemonVersionSprites;
  rubySapphire: PokemonVersionSprites;
}

export interface PokemonGenerationIVSprites {
  diamondPearl: PokemonVersionSprites;
  heartgoldSoulsilver: PokemonVersionSprites;
  platinum: PokemonVersionSprites;
}

export interface PokemonGenerationVSprites {
  blackWhite: PokemonBlackWhiteSprites;
}

export interface PokemonGenerationVISprites {
  omegarubyAlphasapphire: PokemonVersionSprites;
  xy: PokemonVersionSprites;
}

export interface PokemonGenerationVIISprites {
  icons: PokemonIconsSprites;
  ultraSunUltraMoon: PokemonVersionSprites;
}

export interface PokemonGenerationVIIISprites {
  icons: PokemonIconsSprites;
}

export interface PokemonRedBlueSprites {
  backDefault?: string | null;
  backGray?: string | null;
  frontDefault?: string | null;
  frontGray?: string | null;
}

export interface PokemonYellowSprites {
  backDefault?: string | null;
  backGray?: string | null;
  frontDefault?: string | null;
  frontGray?: string | null;
}

export interface PokemonVersionSprites {
  backDefault?: string | null;
  backFemale?: string | null;
  backShiny?: string | null;
  backShinyFemale?: string | null;
  frontDefault: string | null;
  frontFemale?: string | null;
  frontShiny?: string | null;
  frontShinyFemale?: string | null;
}

export interface PokemonBlackWhiteSprites {
  animated: PokemonAnimatedSprites;
  backDefault?: string | null;
  backFemale?: string | null;
  backShiny?: string | null;
  backShinyFemale?: string | null;
  frontDefault?: string | null;
  frontFemale?: string | null;
  frontShiny?: string | null;
  frontShinyFemale?: string | null;
}

export interface PokemonAnimatedSprites {
  backDefault?: string | null;
  backFemale?: string | null;
  backShiny?: string | null;
  backShinyFemale?: string | null;
  frontDefault?: string | null;
  frontFemale?: string | null;
  frontShiny?: string | null;
  frontShinyFemale?: string | null;
}

export interface PokemonIconsSprites {
  frontDefault?: string | null;
  frontFemale?: string | null;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}
