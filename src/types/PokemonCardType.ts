import { iType, selectPokemonType } from "./types"; 

export interface PokemonCardType {
  imageSource: string, 
  name: string,
  types: iType[],
  id: number,
}

export interface iPokemonCard {
  pokemon: PokemonCardType,
  onSelectPokemon: selectPokemonType,
  onSelectedPokemonId: number,
}
