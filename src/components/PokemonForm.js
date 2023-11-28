import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {pokemonAPI, addNewPokemon} ) {
  
  const [name, setName] = useState('');
  const [hp, setHp] = useState(0);
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const newPokemon = {
      name,
      hp,
      sprites: {
        front,
        back
      }
    }

    fetch(pokemonAPI, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }).then(response => response.json())
      .then(data => addNewPokemon(data))


  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
