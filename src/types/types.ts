export interface iNameUrl {
  name: string,
  url: string,
}

export interface iType {
  slot: number,
  type: iNameUrl,
}

export interface iStat {
  base_stat: number,
  effort: number,
  stat: iNameUrl,
}

export type TableStatType = {
  type: string, 
  attack: number,
  defense: number,
  hp: number,
  'special-attack': number,
  'special-defense': number,
  speed: number,
  weight: number,
  'total moves': number,
}

export type SpriteURL = string | null;

export type selectPokemonType = (id: number) => void;

//-------------components
export interface iPokemonList {
  onSelectPokemon: (id: number) => void,
  onFilter: (el: object) => object | null,
  onSelectedPokemonId: number,
};

export interface iSelectedPokemon {
  selectedPokemonId: number,
}
