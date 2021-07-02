export type iNameUrl = {
  name: string,
  url: string,
}

export type iType = {
  slot: number,
  type: iNameUrl,
}

export type iStat = {
  base_stat: number,
  effort: number,
  stat: iNameUrl,
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
