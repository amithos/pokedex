import React from 'react';
import { ReactElement, useState } from 'react';

import './App.css';

import { SelectedPokemon } from './components/SelectedPokemon';
import { PokemonList } from './components/PokemonsList';

//type Filter = () =>

const App = (): ReactElement => {

  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);
  const [filter, setFilter] = useState<any| null>(null);

  const selectPokemon = (id: number) => setSelectedPokemonId(id);
  
  return (
    <div className="App">

      <PokemonList onSelectPokemon={selectPokemon} onFilter={filter}/>

      {selectedPokemonId ? (
        <SelectedPokemon selectedPokemonId={selectedPokemonId}/>
      ) : (
        <p>Please, choose some pokemon</p>
      )}
    </div>
  );
}

export default App;
