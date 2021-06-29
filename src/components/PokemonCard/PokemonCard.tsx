import { ReactElement } from "react"

import { PokemonCardType } from "../../types/PokemonCardType" 
import { iTypes } from "../../types/types"

import './PokemonCard.scss';


export const PokemonCard: React.FC<PokemonCardType> = ({
  imageSource, name, types, id
}): ReactElement => {
  
  
  return (
    <article className="pokemon-card">
      <div className="pokemon-card__content">
        <img 
          className="pokemon-card__image"
          src={imageSource}
          alt={name}
        />
        <p className="pokemon-card__name">
          {name}
        </p>

        <div className="pokemon-card__types">
          {types.map((type: iTypes) => (
            <span
              key={type.type.name} 
              className={`pokemon-card__type pokemon-card__type--${type.type.name}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>

      </div>
    </article>
  ) 
}


