// react is "export default"ed, useState is "export"ed from 'react'
import React, {useState} from 'react';

import {PokemanButton} from './components/PokemanButton';
//import PokeView from './components/PokeView' // import whatever is "export default"ed from PokeView.
import {PokeView} from './components/PokeView' // import whatever is "export"ed from PokeView. Does not depend on "export default"

import './App.css';

// import logo from './logo.svg';

export const App = () => {
  // need to set state
  const [pokeman, setPokeman] = useState([]);

  return (
    <div className="App">
      <PokemanButton setPokeman={setPokeman} />
      <PokeView pokeman={pokeman} />
    </div>
  );
};

