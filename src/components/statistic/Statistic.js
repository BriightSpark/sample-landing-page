import React from 'react';

import Stat from './comp/Stat';
import { data } from './data';

function Statistic() {
  return (
    <div className="max-width">
      <div className="statistic">
        <h3>Why Choosing Us</h3>
        {
          data.map( node => <Stat { ...node } />)
        }
      </div>
    </div>
  );
}

export default Statistic;
