import React from 'react';
import { ReactElement, useState } from 'react';

import { SelectedPokemon } from './components/SelectedPokemon';
import { PokemonList } from './components/PokemonsList';

import { selectPokemonType } from './types/types';

import './App.scss';

const App = (): ReactElement => {

  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);

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

      <div className="app__content">
        <PokemonList
          onSelectPokemon={selectPokemon}
          onSelectedPokemonId={selectedPokemonId}
        />
        <SelectedPokemon selectedPokemonId={selectedPokemonId}/>
      </div>

    </div>
  );
}

export default App;
