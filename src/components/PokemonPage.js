import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const pokemonAPI = 'http://localhost:3000/pokemon'

  const [pokemons, setPokemons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(pokemonAPI)
    .then(response => response.json())
    .then(data => setPokemons(data))
  }, []) 

  function addNewPokemon(newPokemon) {
    setPokemons([newPokemon, ...pokemons])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonAPI={pokemonAPI} addNewPokemon={addNewPokemon}/>
      <br />
      <Search setFilter={setFilter}/>
      <br />
      <PokemonCollection pokemons={pokemons.filter(collection => collection.name.startsWith(filter))} />
    </Container>
  );
}

export default PokemonPage;
