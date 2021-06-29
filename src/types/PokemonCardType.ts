import { iTypes } from "./types"; 

export interface PokemonCardType {
  imageSource: string, 
  name: string,
  types: iTypes[],
  id: number,
}
