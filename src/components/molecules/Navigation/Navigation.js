import React from 'react'
import TopNav from './TopNav'
import MainNav from './MainNav'
import Hamburger from '../Hamburger/Hamburger';
import { connect } from 'react-redux';

const Navigation = (navData) => {
  const { topNav, navLogo, items, navSocial, isMenuActive } = navData;

  return (
    <header className="m-navigation">
      {topNav.isVisible && <TopNav text={topNav.text} />}
      <MainNav navLogo={navLogo} navItems={items} navSocial={navSocial} isMenuActive={isMenuActive} />
      <Hamburger />
    </header>
  )
}

const mapStateToProps = (state) => {
  return state.navData;
}
export default connect(mapStateToProps)(Navigation);
