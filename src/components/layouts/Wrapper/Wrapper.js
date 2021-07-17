import React from 'react'
import './index.css'

const Wrapper = ({ style, children }) => {

  return (
    <div className="container-fluid h-wrapper" style={style}>{children}</div>
  )
}

export default Wrapper
