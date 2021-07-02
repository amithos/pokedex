import { ReactElement, useState, useEffect } from 'react';

import { iPokemonList } from '../../types/types';
import { PokemonType } from '../../types/PokemonType';
import { PokemonCardType } from '../../types/PokemonCardType';

import { getPokemonById } from '../../api/pokemon';

import { PokemonCard } from '../PokemonCard';
import { Loader } from '../Loader';

import './PokemonList.scss';



export const PokemonList: React.FC<iPokemonList> = ({
  onSelectPokemon,
  onFilter,
  onSelectedPokemonId,

}): ReactElement => {
  
  const [pokemons, setPokemons] = useState<PokemonCardType[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);

  const startLoading = () => {
    setLoading(true);
  }

  const endLoading = () => {
    setLoading(false);
  }
  
  const loadPokemons = (): void => {

    startLoading();

    const limit = 12;
    let offset = pokemons.length + 1;
    
    const requests = [];

    for (let i = 0; i < limit; i++) {
      requests.push(getPokemonById(offset));
      offset++;
    }

    Promise.all(requests)
      .then((newPokemons: PokemonType[]) => {
        const cards = newPokemons.map(
          (pokemon: PokemonType): PokemonCardType => {
            const {name, id, types} = pokemon;

            return {
              imageSource: pokemon.sprites.other['official-artwork'].front_default,
              name,
              types: types.sort((typeA, typeB) => typeA.slot - typeB.slot),
              id,
            }
          }
        );

        return setPokemons([...pokemons, ...cards]);
      })
      .then(endLoading);
  }
           
  let visiblePokemons = [...pokemons];

  // if (onFilter) {
  //   visiblePokemons = visiblePokemons.filter(onFilter);
  // }

  useEffect(loadPokemons, []);
  
  return (
    <section className="pokemon-list">
      <div className="pokemon-list__content">
        
        <ul className="pokemon-list__cards">
          {visiblePokemons.map((pokemon: PokemonCardType) => (
            <li className="pokemon-list__item" key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                onSelectPokemon={onSelectPokemon}
                onSelectedPokemonId={onSelectedPokemonId}
              />
            </li>
          ))}
        </ul>  
              
        <button
          className="pokemon-list__button"
          onClick={loadPokemons}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <p className="pokemon-list__button-text">
              Load More
            </p>  
          )}  
        </button>
          
      </div>
    </section>
  );
}
