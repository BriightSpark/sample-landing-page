import React, { useState } from 'react';

function HeroBanner() {
  const [isDirty, setIsDirty] = useState( false );

  const onInputChange = (event) => {
    setIsDirty( event.target.value !== '' ) 
  }

  return (
    <div className="hero-banner">
      <div className="hero-banner__background">
        <img className="hero-banner__background-image" src='image/banner/banner-image.png' alt="Hero banner" />
      </div>
      <div className="hero-banner__content max-width">
        <h2 className="hero-banner__content-title">Make your interior more minimalistic & modern</h2>
        <h4 className="hero-banner__content-subtitle">Turn your room with panto into a lot more minimalist and modern with ease and speed</h4>
        <div className="hero-banner__content-input">
          <input
            type='text'
            placeholder='Search furniture'
            aria-label='serach Input'
            className='hero-banner__content-input-text text-md'
            onChange={ onInputChange }
          />
          <img className='hero-banner__content-input-icon' src="svg/search.svg" />
          <div className={`hero-banner__easter-egg ${ !!isDirty && 'show' }`}>Không có tìm được đâu...</div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
