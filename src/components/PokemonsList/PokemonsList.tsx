import { ReactElement, useState, useEffect } from 'react';

import { PokemonType } from '../../types/PokemonType';
import { PokemonCardType } from '../../types/PokemonCardType';

import { getPokemonById } from '../../api/pokemon';

import { PokemonCard } from '../PokemonCard';
import { Loader } from '../Loader';

import './PokemonList.scss';

interface iPokemonList {
  onSelectPokemon: (id: number) => void,
  onSelectedPokemonId: number,
};

export const PokemonList: React.FC<iPokemonList> = ({
  onSelectPokemon,
  onSelectedPokemonId,

}): ReactElement => {
  
  const [pokemons, setPokemons] = useState<PokemonCardType[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);

  const startLoading = ():void => {
    setLoading(true);
  }

  const endLoading = ():void => {
    setLoading(false);
  }
  
  const loadPokemons = (): void => {

    startLoading();

    const limit = 12;
    let offset = pokemons.length + 1;
    
    const requests: Promise<any>[] = [];

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
           
  useEffect(loadPokemons, []);
  
  return (
    <section className="pokemon-list">
      <div className="pokemon-list__content">
        
        <ul className="pokemon-list__cards">
          {pokemons.map((pokemon: PokemonCardType) => (
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
