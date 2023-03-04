import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Item from './comps/Item';
import Selector from './comps/Selector';
import { data } from './data';

function Listing() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('chair');
  const sliderRef = useRef( null );

  useEffect( () => {
    setProducts( data?.[category] || [] );
  }, [category])

  const sliderOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    speed: 300,
    height: 'auto',
    width: '100%',
    gap: '20px',
    arrows: true,
    pagination: false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        perPage: 4,
      },
    }
  };

  function onCategorySelect( type = 'chair' ) {
    setCategory(type)
  }

  return (
    <div className='listing-wrapper'>
      <div className="max-width">
        <div className="listing">
          <h3 className="listing__heading">Best Selling Product</h3>
          <Selector onSelect={ onCategorySelect } activeType={ category } ></Selector>
          { products.length < 0 ? <p>No item to display</p>  :
            <Splide ref={ sliderRef } options={ sliderOptions }>
              {
                products.map( (product, index) => (
                  <SplideSlide key={ `product item ${ index }` } >
                    <Item { ...product } type={ category } />
                  </SplideSlide>
                ))
              }
            </Splide>
          }
        </div>
      </div>
    </div>
  );
}

export default Listing;
