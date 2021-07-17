import React from 'react'
import NavLogo from './NavLogo';
import NavItems from './NavItems';
import NavSocial from './NavSocial';

const MainNav = ({ navLogo, navItems, navSocial }) => {
  return (
    <nav className="m-navigation__main-nav">

      {navLogo && <NavLogo />}
      <NavItems navItems={navItems} />
      <NavSocial navSocial={navSocial.items} />
    </nav>
  )
}

export default MainNav
