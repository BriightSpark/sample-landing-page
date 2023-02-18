import React from 'react';
import {
  Header,
  Footer,
  HeroBanner,
  Statistic,
  Listing
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
      </main>
      <Footer />
    </>
  );
}

export default App;
