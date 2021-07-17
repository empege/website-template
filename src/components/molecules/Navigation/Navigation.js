import React from 'react'
import TopNav from './TopNav'
import MainNav from './MainNav'

const Navigation = ({ navData }) => {
  const { topNav, navLogo, items, navSocial } = navData;

  return (
    <header className="m-navigation">
      {topNav.isVisible && <TopNav text={topNav.text} />}
      <MainNav navLogo={navLogo} navItems={items} navSocial={navSocial} />
    </header>
  )
}

export default Navigation
