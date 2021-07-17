import React from 'react'
import logo from '../../../assets/images/testImg.png'

const NavLogo = () => {
  return (
    <div className="m-navigation__logo-wrapper">
      <a href="home">
        <img className="m-navigation__logo-image" src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default NavLogo
