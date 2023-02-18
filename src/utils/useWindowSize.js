import { useState } from 'react';
import throttle from 'lodash.throttle';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState( {
    width: 0,
    height: 0
  } );

  // 'useLayoutEffect' for CSR
  // 'useEffect' for SSR
  useIsomorphicLayoutEffect( () => {
    const handleSize = throttle( () => {
      setWindowSize( {
        width: window.innerWidth,
        height: window.innerHeight
      } );
    }, 200 );

    // call immediately to get updated initial window size (ssr)
    handleSize();

    window.addEventListener( 'resize', handleSize );

    return () => window.removeEventListener( 'resize', handleSize );
  }, [] );

  return windowSize;
};