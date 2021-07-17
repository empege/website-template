import React from 'react'

const NavSocial = ({ navSocial }) => {

  return (
    <ul className="m-navigation__social-wrapper">
      {navSocial.map(item => {
        return (
          <li key={item.id} className="m-navigation__social-item">
            <a href={item.src}><img className="m-navigation__social-icon" src={item.icon} alt={item.text} /></a>
          </li>
        )
      })
      }
    </ul>
  )
}

export default NavSocial
