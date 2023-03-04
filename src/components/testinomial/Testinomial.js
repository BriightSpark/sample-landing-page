import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from './comp/Card';

function Testinomial() {
  const sliderRef = useRef( null );

  const sliderOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    speed: 300,
    height: 'auto',
    width: '100%',
    gap: '40px',
    arrows: true,
    pagination: false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        perPage: 3,
      },
    }
  };

  return (
    <div className='testinomial-wrapper'>
      <div className="max-width">
        <p className="testinomial__preheading">Testinomial</p>
        <h3 className="testinomial__heading">Our Client Reviews</h3>
        <Splide ref={ sliderRef } options={ sliderOptions }>
          <SplideSlide>
            <Card
              authorName='Bang Upin'
              authorPosition='Pedagang Asongan'
              authorPortrait='/image/testimonial/author-1.png'
              authorQuote='Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal'
              backgroundImg='/image/testimonial/testimonial-1.png'
              rating={ 4 }
            />
          </SplideSlide>
          <SplideSlide>
            <Card
              authorName='Ibuk Sukijan'
              authorPosition='Ibu Rumah Tangga'
              authorPortrait='/image/testimonial/author-2.png'
              authorQuote='Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah'
              backgroundImg='/image/testimonial/testimonial-2.png'
              rating={ 1 }
            />
          </SplideSlide>
          <SplideSlide>
            <Card
              authorName='Mpok Ina'
              authorPosition='Karyawan Swasta'
              authorPortrait='/image/testimonial/author-3.png'
              authorQuote='Sangat terjangkau untuk kantong saya yang tidak terlalu banyak'
              backgroundImg='/image/testimonial/testimonial-3.png'
              rating={ 2 }
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Testinomial;
