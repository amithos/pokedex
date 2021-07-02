import React, { ReactElement, useState, useEffect, useRef} from 'react';

import {iSelectedPokemon, iStat, iType, TableStatType} from '../../types/types';
import { SelectedCardType } from '../../types/SelectedCardType';
import { PokemonType } from '../../types/PokemonType';
import { SavedStatType } from '../../types/SelectedCardType';

import { getPokemonById } from '../../api/pokemon';

import './SelectedPokemon.scss';
import { withACapital } from '../../_auxiliary';
import { Loader } from '../Loader';

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const getId = (id: number): string => {
  let stringId;
  switch (true) {
    case (id < 10) : stringId = `00${id}`;
    break;

    case (id < 100) : stringId = `0${id}`;
    break;

    default: stringId = id;
  }

  return `#${stringId}`
}

const orderedKey = [
  'type', 'attack', 'defense', 'hp', 'special-attack',
  'special-defense', 'speed', 'weight', 'total moves'
];

export const SelectedPokemon: React.FC<iSelectedPokemon> = ({
  selectedPokemonId
}): ReactElement => {

  const [selectedPokemon, setSetlectedPokemon] = 
    useState<any>({});
  const [isLoading, setLoading] = useState<any>(false);
  const [isLoaded, setLoaded] = useState<any>(false);

  const prevSelectedPokemonId = usePrevious(selectedPokemonId);

  const startLoading = () => {
    setLoading(true);
    setLoaded(false);
  }

  const endLoading = () => {
    setLoading(false);
    setLoaded(true);
  }

  const loadPokemon = () => {

    if (prevSelectedPokemonId === selectedPokemonId 
      || selectedPokemonId === 0) {
      return;
    }
    
    startLoading();

    getPokemonById(selectedPokemonId)
      .then((pokemon: PokemonType):void => {
      
        const {
          name,
          types,
          stats,
          weight,
          id,
          sprites,
          moves,
        } = pokemon;

        const tableData: any = {
          type: types.find((type: iType) => type.slot === 1)?.type.name,
          'total moves': moves.length,
          weight,
        }
        
        stats.forEach((oldStat: iStat) => {
          tableData[oldStat.stat.name] = oldStat.base_stat;

          console.log(
           withACapital(tableData[oldStat.stat.name])
           );
        });

        
        const newPokemon = {
          imageSource: sprites.other['official-artwork'].front_default,
          name,
          id,
          tableData,  
        }
        
        setSetlectedPokemon(newPokemon);
      })
      .then(endLoading);
  }

  useEffect(loadPokemon, [selectedPokemonId]);

  const {
    imageSource,
    name,
    id,
    tableData,
  } = selectedPokemon;

  
  return (
    <section className="selected-pokemon">
      
      {!isLoading ? (<></>
      ) : (
        <div className="selected-pokemon__loader">
          <Loader/>
        </div>
      )}

      { (!isLoaded) ? (
        <></>
      ) : (
        <article className="selected-pokemon__card">
          <div className="selected-pokemon__content">
            <img
              className="selected-pokemon__image"
              src={imageSource}
              alt={name}
            />
            <table className="selected-pokemon__table">
              <caption className="selected-pokemon__name">
                {`${withACapital(name)} ${getId(id)}`}
              </caption>

              <tbody>
                {orderedKey.map((dataKey: string) => {            

                  return (
                  <tr
                    key={dataKey}
                    className="selected-pokemon__row"
                  >
                    <td className="selected-pokemon__datum">
                      {withACapital(dataKey)}
                    </td>
                    <td className="selected-pokemon__value">
                      {withACapital(tableData[dataKey])}
                    </td>
                  </tr>
                )}
                )}
              </tbody>
            </table>
          </div>
        </article>
      )}
    </section>
  )
}
