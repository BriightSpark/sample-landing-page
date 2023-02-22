import React from 'react';

function SingleTeaser() {
  return (
    <div className='single-teaser-wrapper'>
      <div className='max-width single-teaser'>
        <div className='single-teaser__image-wrapper'>
          <img className='single-teaser__image' src='image/banner/small-banner.png' alt="Teaser banner" />
          <img className='single-teaser__image--hidden' src='image/banner/small-banner.png' alt="Teaser banner" />
          <div className='single-teaser__image-backdrop single-teaser__image-backdrop--1'></div>
          <div className='single-teaser__image-backdrop single-teaser__image-backdrop--2'></div>
        </div>
        <div className='single-teaser__content'>
          <p className='text-md single-teaser__content-pretitle'>EXPERIENCES</p>
          <h3 className='single-teaser__content-title'>we provide you the best experience</h3>
          <p className='single-teaser__content-description'>
            You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
          </p>
          <a href={ () => {} } className='single-teaser__content-button'>More Info</a>
        </div>
      </div>
    </div>
  );
}

export default SingleTeaser;
