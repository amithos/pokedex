import { request } from "./api";

const pokemon = 'pokemon/';

export const getPokemonById = (id: number): Promise<any> => {
  return request(`${pokemon}${id}`)
}
