export interface iNameUrl {
  name: string,
  url: string,
}

export interface iTypes {
  slot: number,
  type: iNameUrl,
}

export interface iStats {
  base_stat: number,
  effort: number,
  stat: iNameUrl,
}

export type SpriteURL = string | null;

//-------------components
export interface iPokemonList {
  onSelectPokemon: (id: number) => void,
  onFilter: (el: object) => object | null,
};

export interface iSelectedPokemon {
  selectedPokemonId?: number,
}
