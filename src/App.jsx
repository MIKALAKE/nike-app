import React from 'react';
import { Hero, Sales } from './components';
import { heroapi, popularsales, toprateslaes } from './data/data';

const App = () => {
  return (
    <main>
      <Hero heroapi={heroapi} />
      <Sales sales={popularsales} />
      <Sales sales={toprateslaes} />
    </main>
  );
};

export default App;
