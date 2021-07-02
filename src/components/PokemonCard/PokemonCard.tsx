import { ReactElement } from "react"
import classNames from 'classnames';

import { iPokemonCard } from "../../types/PokemonCardType" 
import { iType } from "../../types/types"

import { withACapital } from '../../_auxiliary';


import './PokemonCard.scss';

export const PokemonCard: React.FC<iPokemonCard> = ({
  pokemon, onSelectPokemon, onSelectedPokemonId,
}): ReactElement => {
  
  const {
    name,
    id, 
    imageSource,
    types
  } = pokemon;

  return (
    <article
      className={classNames(`pokemon-card--${types[0].type.name}`, {
        "pokemon-card": true,
        "pokemon-card--selected": id === onSelectedPokemonId,
      })}
      onClick={() => onSelectPokemon(id)}
    >
      <div className="pokemon-card__content">
        <img 
          className="pokemon-card__image"
          src={imageSource}
          alt={name}
        />
        <p className="pokemon-card__name">
          {withACapital(name)}
        </p>

        <div className="pokemon-card__types">
          {types.map((type: iType) => (
            <span
              key={type.type.name} 
              className={`pokemon-card__type pokemon-card__type--${type.type.name}`}
            >
              {withACapital(type.type.name)}
            </span>
          ))}
        </div>
      </div>
    </article>
  ) 
}


