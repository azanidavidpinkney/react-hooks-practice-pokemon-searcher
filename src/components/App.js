import React from "react";
import PokemonPage from "./PokemonPage";

// App
// |- Pokemon Page (retrieves pokemons from API)
//    |- Pokemon Form
//    |- Search
//    |- Pokemon Collection (receives pokemons from Page)
//       |- Pokemon Card (recevies pokemon from Collection)


function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
