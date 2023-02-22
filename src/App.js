import React from 'react';
import {
  Header,
  Footer,
  HeroBanner,
  Statistic,
  Listing,
  SingleTeaser,
  MultipleTeaser
} from './components';

import './styles/index.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Statistic />
        <Listing />
        <SingleTeaser />
        <MultipleTeaser />
      </main>
      <Footer />
    </>
  );
}

export default App;
