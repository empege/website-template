import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_MENU } from '../../../actions';

const Hamburger = ({ navData, toggle }) => {
  const { isMenuActive } = navData;

  return (
    <button className={`hamburger hamburger--elastic ${isMenuActive && 'is-active'}`} onClick={() => { toggle(); }} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { toggle: () => dispatch({ type: TOGGLE_MENU }) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
