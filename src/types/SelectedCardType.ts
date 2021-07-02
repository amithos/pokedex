

export type SavedStatType = {
  name: string,
  value: number,
}


export interface SelectedCardType {
  imageSource: string;
  name: string,
  id: number,
    tableData: {
      type: string,
      attack: number,
      defense: number,
      hp: number,
      ['special-attack']: number,
      ['special-defense']: number,
      speed: number,
    },
  weight: number,
  moves: number,
}
