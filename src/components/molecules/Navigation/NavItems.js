import React from 'react'

const NavItems = ({ navItems }) => {
  return (
    <ul className="m-navigation__nav-items">
      {
        navItems.map(item => {
          return (
            <li className="m-navigation__nav-item" key={item.id}>
              <a href={item.src} >{item.text}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavItems
