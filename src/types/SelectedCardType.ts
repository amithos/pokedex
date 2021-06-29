import { iTypes, iStats } from "./types";

export interface SelectedCardType {
  imageSource: string;
  name: string,
  id: number,
  types: iTypes[],
  stats: iStats[],
  weight: number,
  moves: number,
}
