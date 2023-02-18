import React from 'react';

function Stat( { title = '', description = '', buttonTitle = 'More Info', buttonUrl = 'void;' } ) {
  return (
    <div className="stat">
      { title && <h4>{ title }</h4> }
      { description && <p>{ description }</p> }
      <a href={ buttonUrl }>
        { buttonTitle }
      </a>
    </div>
  );
}

export default Stat;
