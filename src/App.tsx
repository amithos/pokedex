import React from 'react';
import { ReactElement, useState } from 'react';

import { SelectedPokemon } from './components/SelectedPokemon';
import { PokemonList } from './components/PokemonsList';

import { selectPokemonType } from './types/types';

import './App.scss';

const App = (): ReactElement => {

  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);
  const [filter, setFilter] = useState<any | null>(null);

  const selectPokemon: selectPokemonType = id => setSelectedPokemonId(id);
  
  return (
    <div className="app">

      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">
            Pokedex
          </h1>
        </div>
      </header>

      <section className="app__selector">
        <div className="app__selector-content">
          <label htmlFor="type-selector">Choose main type of pokemon</label>
          <div
            className="app__select"
            id="type-selector"
          >

          </div>
        </div>
      </section>

      <div className="app__content">
        <PokemonList
          onSelectPokemon={selectPokemon}
          onFilter={filter}
          onSelectedPokemonId={selectedPokemonId}
        />
        <SelectedPokemon selectedPokemonId={selectedPokemonId}/>
      </div>

    </div>
  );
}

export default App;
