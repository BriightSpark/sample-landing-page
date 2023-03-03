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
import Testinomial from './components/testinomial/Testinomial';

import '@splidejs/react-splide/css';
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
        <Testinomial />
      </main>
      <Footer />
    </>
  );
}

export default App;
