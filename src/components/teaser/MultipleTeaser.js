import React from 'react';

function MultipleTeaser() {
  return (
    <div className='multiple-teaser-wrapper'>
      <div className='max-width multiple-teaser'>
        <div className='multiple-teaser__image-wrapper'>
          <img className='multiple-teaser__image multiple-teaser__image--1' src='image/banner/material-group-1.png' alt="Teaser banner" />
          <img className='multiple-teaser__image multiple-teaser__image--2' src='image/banner/material-group-2.png' alt="Teaser banner" />
          <img className='multiple-teaser__image multiple-teaser__image--3' src='image/banner/material-group-3.png' alt="Teaser banner" />
          <div className='multiple-teaser__image--hidden' />
          <div className='multiple-teaser__image-backdrop'></div>
        </div>
        <div className='multiple-teaser__content'>
          <p className='text-md multiple-teaser__content-pretitle'>Materials</p>
          <h3 className='multiple-teaser__content-title'>Very serious materials for making furniture</h3>
          <p className='multiple-teaser__content-description'>
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price          </p>
          <a href={ () => {} } className='multiple-teaser__content-button'>More Info</a>
        </div>
      </div>
    </div>
  );
}

export default MultipleTeaser;
