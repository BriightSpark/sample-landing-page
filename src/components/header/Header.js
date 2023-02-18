import React, { useState } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import { BREAKPOINT } from '../../utils/constants';

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < BREAKPOINT.MD;

  const navigation = ( classname = '' ) => (
    <div className={`header__navigation ${ classname }`} >
      <a className="header__navigation-link" href={ () => false } >Furniture</a>
      <a className="header__navigation-link" href="/#">Shop</a>
      <a className="header__navigation-link" href="/#">About Us</a>
      <a className="header__navigation-link" href="/#">Contact</a>
      { classname && <button className='header__navigation-close' onClick={ toggleOpenNav }>X</button> }
    </div>
  )

  const toggleOpenNav = () => {
    setIsOpenNav(!isOpenNav)
  }

  return (
    <header className={`header-wrapper  ${ !isOpenNav ? 'header-wrapper--overflow-hidden' : '' }`}>
      <div className="header max-width">
        <img className="header__logo" alt='Logo' src="svg/Panto.svg" />
        { !isMobile && navigation() }
        <div className='header__right-side'>
          <div className="header__cart">
            <img className="header__cart-logo" alt="Cart" src="svg/cart.svg" />
            <span className="header__cart-count">0</span>
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
