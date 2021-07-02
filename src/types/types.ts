export type iNameUrl = {
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
  stat: {
    name: keyof TableStatType,
    url: string,
  },
}

export type TableStatType = {
  type: string | undefined, 
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
