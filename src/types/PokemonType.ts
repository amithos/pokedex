import { iNameUrl, SpriteURL, iType, iStat } from './types';

interface iPokemonAbility {
  ability: iNameUrl,
  is_hidden: boolean,
  slot: number,
}

interface iIndices {
  game_index: number,
  version: iNameUrl,
}

interface iVersionGroupDetails {
  level_learned_at: number,
  move_learn_method: iNameUrl,
  ersion_group: iNameUrl,
}

interface iVersionDetails {
  rarity: number,
  version: iNameUrl,
}

interface iItems {
  item: iNameUrl,
  version_details: iVersionDetails[],
}

interface iMoves {
  move: iNameUrl,
  version_group_details: iVersionGroupDetails,
}

// ---- Sprites interfaces

interface iOnlyFrontSprite {
  front_default: string,
}

interface iOnlyFrontDefaultFemale extends iOnlyFrontSprite {
  front_female: SpriteURL,
}

interface iOnlyFrontShinyFemale {
  front_shiny: string,
  front_shiny_female: SpriteURL
}

interface iDefaultSprites  extends iOnlyFrontSprite {
  back_default: string,
}

interface iDefaultFemaleSprites {
  back_female: SpriteURL,
  front_female: SpriteURL,
}

interface iShinyDefault {
  front_shiny: string,
  back_shiny: string,
}

interface iShinyFemale {
  back_shiny_female: SpriteURL,
  front_shiny_female: SpriteURL,
}

interface iFrontDefalutFemale extends iOnlyFrontSprite {
  front_female: SpriteURL,
}

interface iGraySprites {
  front_gray: string,
  back_gray: string,
}

interface iShinySprites extends iShinyDefault, iShinyFemale {}

interface iDefaultAndGraySprites extends iDefaultSprites, iGraySprites {}
interface iDefaultAndShinySprites extends iDefaultSprites, iShinyDefault {}

interface iDefaultFemaleAndShinyFemale extends 
  iShinySprites, iDefaultSprites, iDefaultFemaleSprites {

}

interface iEmerald extends iOnlyFrontSprite {
  front_shiny: string,
}

interface iBlackWhite extends iDefaultFemaleAndShinyFemale {
  animated: iDefaultFemaleAndShinyFemale,
}

interface iGenerationVI_Type extends iOnlyFrontDefaultFemale, iOnlyFrontShinyFemale {}

// Sprites Generation itnterfaces

interface iGenerationI {
  ['red-blue']: iDefaultAndGraySprites,
  yellow: iDefaultAndGraySprites,
}

interface iGenerationII {
  crystal: iDefaultAndShinySprites,
  gold: iDefaultAndShinySprites,
  silver: iDefaultAndShinySprites,
}

interface iGenerationIII {
  emerald: iEmerald,
  ['firered-leafgreen']: iDefaultAndShinySprites,
  ['ruby-sapphire']: iDefaultAndShinySprites,
}

interface iGenerationIV {
  ['diamond-pearl']: iDefaultFemaleAndShinyFemale,
  ['heartgold-soulsilver']: iDefaultFemaleAndShinyFemale,
  platinum: iDefaultFemaleAndShinyFemale,
}

interface iGenerationV {
  ['black-white']: iBlackWhite,
}

interface iGenerationVI {
  ['omegaruby-alphasapphire']: iGenerationVI_Type,
  ['x-y']: iGenerationVI_Type,
}

interface iGenerationVIII {
  icons: iFrontDefalutFemale,
}

interface iGenerationVII extends iGenerationVIII {
  ['ultra-sun-ultra-moon']: iGenerationVI_Type,
}

interface iVersions {
  ['generation-i']: iGenerationI,
  ['generation-ii']: iGenerationII,
  ['generation-iii']: iGenerationIII,
  ['generation-iv']: iGenerationIV,
  ['generation-v']: iGenerationV,
  ['generation-vi']: iGenerationVI,
  ['generation-vii']: iGenerationVII,
  ['generation-viii']: iGenerationVIII,
}

interface iOther {
   dream_world: iFrontDefalutFemale,
   ['official-artwork']: iOnlyFrontSprite,
}

interface iSprites extends 
  iDefaultSprites,
  iDefaultFemaleSprites,
  iShinyDefault,
  iShinyFemale {
  
  other: iOther,
  versions: iVersions, 
}

interface iPastTypes {
  generation: iNameUrl,
  types: iType[],
}

export interface PokemonType {
  abilities: iPokemonAbility[],
  base_experience: number,
  forms: iNameUrl,
  game_indices: iIndices[],
  height: number,
  held_items: iItems[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: iMoves[],
  name: string,
  order: number,
  past_types: iPastTypes[],
  species: iNameUrl,
  sprites: iSprites,
  stats: iStat[],
  types: iType[],
  weight: number,
}
