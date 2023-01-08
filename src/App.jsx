import React from 'react';
import { Hero } from './components';
import { heroapi } from './data/data';

const App = () => {
  return <Hero heroapi={heroapi} />;
};

export default App;
