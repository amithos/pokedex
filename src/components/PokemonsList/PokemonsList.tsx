import { ReactElement, useState, useEffect } from 'react';

import { iPokemonList } from '../../types/types';
import { PokemonType } from '../../types/PokemonType';
import { PokemonCardType } from '../../types/PokemonCardType';

import { getPokemonById } from '../../api/pokemon';

import { PokemonCard } from '../PokemonCard';

import './PokemonList.scss';



export const PokemonList: React.FC<iPokemonList> = ({
  onSelectPokemon,
  onFilter,
}): ReactElement => {
  
  const [pokemons, setPokemons] = useState<PokemonCardType[]>([]);
  
  const loadPokemons = (): void => {

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
      });
  }
           
  let visiblePokemons = [...pokemons];

  // if (onFilter) {
  //   visiblePokemons = visiblePokemons.filter(onFilter);
  // }

  useEffect(loadPokemons, []);

  console.log(visiblePokemons);
  
  
  return (
    <section className="pokemon-list">
      <div className="pokemon-list__content">
        
        <ul className="pokemon-list__cards">
          {visiblePokemons.map((pokemon: PokemonCardType) => (
            <li className="pokemon-list__item" key={pokemon.id}>
              <PokemonCard {...pokemon}/>
            </li>
          ))}
        </ul>  
              
        <button
          className="pokemon-list__button"
          onClick={loadPokemons}
        >
          Load More
        </button>
          
        {/* <button className="PokemonList__button">Show Less</button> 
          Як варіант
        */}
      </div>
    </section>
  );
}
