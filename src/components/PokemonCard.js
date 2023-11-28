import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon} ) {
  
  const [isBack, setIsBack] = useState(false)

  function handleClick() {
    setIsBack(!isBack)
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img 
            alt={pokemon.name} 
            src={isBack ? pokemon.sprites.back : pokemon.sprites.front}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
