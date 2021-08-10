import React from 'react'
import NavLogo from './NavLogo';
import NavItems from './NavItems';
import NavSocial from './NavSocial';

const MainNav = ({ navLogo, navItems, navSocial, isMenuActive }) => {
  console.log(isMenuActive);
  return (
    <nav className={`m-navigation__main-nav ${isMenuActive && 'm-navigation__main-nav--active'}`}>

      {navLogo && <NavLogo />}
      <NavItems navItems={navItems} />
      <NavSocial navSocial={navSocial.items} />
    </nav>
  )
}

export default MainNav
