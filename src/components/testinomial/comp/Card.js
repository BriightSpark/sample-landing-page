import React from 'react';
import ReactStars from 'react-stars'

function Testinomial( props ) {
  const {
    authorName,
    authorPosition,
    authorPortrait,
    authorQuote,
    backgroundImg = '',
    rating = 0
  } = props
  return (
    <div className='card'>
      <div className='card__image'>
        { backgroundImg && <img src={ backgroundImg || '' } alt='Testimonial card' /> }
      </div>
      <div className='card__information'>
        <div className='card__information-author'>
          <img src={authorPortrait} alt='author portrait' />
        </div>
        <div className='card__information-details'>
          <p className='card__information-name text-md'>{ authorName }</p>
          <p className='card__information-position text-xs'>{ authorPosition }</p>
          <p className='card__information-quote text-sm'>“{ authorQuote }“</p>
          <ReactStars
            className='card__information-stars'
            count={ 5 }
            value={ rating }
            size={ 11 }
            edit={ false }
          />
        </div>
      </div>
    </div>
  );
}

export default Testinomial;
