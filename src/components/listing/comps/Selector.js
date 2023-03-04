import React from 'react';

function Selector( { activeType, onSelect } ) {

  function handleClick( value ) {
    onSelect( value );
  }

  return (
    <div className='selector-wrapper'>
      <div className='selector'>
        <button className={ activeType === 'chair' ? 'active' : '' } onClick={ () => handleClick('chair') }>Chair</button>
        <button className={ activeType === 'bed' ? 'active' : '' } onClick={ () => handleClick('bed') }>Beds</button>
        <button className={ activeType === 'sofa' ? 'active' : '' } onClick={ () => handleClick('sofa') }>Sofa</button>
        <button className={ activeType === 'lamp' ? 'active' : '' } onClick={ () => handleClick('lamp') }>Lamp</button>
      </div>
    </div>
  );
}

export default Selector;
