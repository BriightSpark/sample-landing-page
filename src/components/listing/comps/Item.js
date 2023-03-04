import React from 'react';
import ReactStars from 'react-stars'


function Item( props ) {
  const {
    name = '',
    rating = 5,
    price = 100,
    type='',
    picture = `https://random.imagecdn.app/v1/image?width=255&height=255&category=${ type }`
  } = props;

  function onAddItem() {
    const addItemEvent = new CustomEvent("addItemEvent");
    window.dispatchEvent(addItemEvent);
  }

  return (
    <div className='item'>
      <div className='item__image'>
        <img src={picture} alt='product showcase' />
      </div>
      <div className='item__information'>
        <p className='item__information-type'>{ type }</p>
        <h5 className='item__information-name'>{ name }</h5>
        <ReactStars
            className='item__information-stars'
            count={ 5 }
            value={ rating }
            size={ 11 }
            edit={ false }
          />
        <h5 className='item__information-price'>${ price }</h5>
      </div>
      <button className='item__button' onClick={ () => onAddItem() }>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Item;
