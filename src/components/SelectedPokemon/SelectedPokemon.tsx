import React, { ReactElement } from 'react';

import {iSelectedPokemon, iStats} from '../../types/types';

import './SelectedPokemon.scss';

export const SelectedPokemon: React.FC<iSelectedPokemon> = ({
  selectedPokemonId
}): ReactElement => {


  const getStatByName = (name: string) => {
    return (element: iStats) => element.stat.name === name;
  }
  
  return (
    <section className="selected-pokemon">
      <article className="selected-pokemon__card">
        {/* Підгружати одного покемона по індексу? - YES*/}

        {/* <article className='pokemon-list__selected-card'>
              <img
                className="pokemon-list__image"
                src={imageSource}
                alt={name}/>
              <table className="pokemon-list__table">
                <caption className="pokemon-list__caption"></caption>

                <tbody>
                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Type</td>
                    <td className="pokemon-list__value">
                      {types.find(
                        (type: iTypes) => type.slot === 1
                      )!.type.name
                      }
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Attack</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('attack'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Defense</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('defense'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">HP</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('hp'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">SP Attack</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('special-attack'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">SD Defense</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('special-defense'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Speed</td>
                    <td className="pokemon-list__value">
                      {stats.find(getStatByName('speed'))!.base_stat}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Weight</td>
                    <td className="pokemon-list__value">
                      {weight}
                    </td>
                  </tr>

                  <tr className="pokemon-list__row">
                    <td className="pokemon-list__datum">Total Moves</td>
                    <td className="pokemon-list__value">
                      {moves}
                    </td>
                  </tr>
                </tbody>
                    
              </table>
            </article> */}

      </article>
    </section>
  )
}