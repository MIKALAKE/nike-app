import React from 'react';

import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from './data/data';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales sales={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales sales={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
};

export default App;
