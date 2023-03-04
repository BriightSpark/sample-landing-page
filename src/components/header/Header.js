import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import { BREAKPOINT } from '../../utils/constants';

function Header() {
  const [cartAmount, setCartAmount] = useState( localStorage.getItem('cartAmount') || 0 );
  const [isOpenNav, setIsOpenNav] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < BREAKPOINT.MD;

  const navigation = ( classname = '' ) => (
    <div className={`header__navigation ${ classname }`} >
      <a className="header__navigation-link" href={ () => {} } >Furniture</a>
      <a className="header__navigation-link" href="#shop">Shop</a>
      <a className="header__navigation-link" href="#about">About Us</a>
      <a className="header__navigation-link" href="#contact">Contact</a>
      { classname && <button className='header__navigation-close' onClick={ toggleOpenNav }>X</button> }
    </div>
  )

  const toggleOpenNav = () => {
    setIsOpenNav(!isOpenNav)
  }

  function handleAddItemEvent() {
    const currentAmount = localStorage.getItem('cartAmount');
    const newAmount = Number( currentAmount ) + 1;
    localStorage.setItem('cartAmount', newAmount)
    setCartAmount( newAmount )
  }

  function clearCart() {
    localStorage.setItem('cartAmount', 0)
    setCartAmount( 0 )
  }

  useEffect( () => {
    window.addEventListener( 'addItemEvent', handleAddItemEvent )
    return () => window.removeEventListener( 'addItemEvent', handleAddItemEvent )
  }, [] )

  return (
    <header className={`header-wrapper  ${ !isOpenNav ? 'header-wrapper--overflow-hidden' : '' }`}>
      <div className="header max-width">
        <img className="header__logo" alt='Logo' src="svg/Panto.svg" />
        { !isMobile && navigation() }
        <div className='header__right-side'>
          <div className="header__cart" onClick={ () => clearCart() } >
            <img className="header__cart-logo" alt="Cart" src="svg/cart.svg" />
            <span className="header__cart-count" >{ cartAmount }</span>
          </div>
          { isMobile &&
            <div className="overflow-hidden">
              <button className='header__navigation-toggle' onClick={ toggleOpenNav }>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div>
                { navigation(`header__navigation--mobile ${ !!isOpenNav ? 'header__navigation--mobile-open' : '' }`) }
              </div>
            </div>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
