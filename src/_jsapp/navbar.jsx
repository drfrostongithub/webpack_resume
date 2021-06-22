import React from "react";
import { connect } from "react-redux";

// interface Props {
//   pageView: any;
//   changePage?: Function
// }

const navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item link-text' id='themeButton'>
          <a href='#' className='nav-link' name='home' onClick={props.setPage}>
            <i className='fas fa-home'></i>
            Home
          </a>
        </li>

        <li className='nav-item link-text' id='themeButton'>
          <a href='#' className='nav-link' name='portfolio' onClick={props.setPage}>
            <i className='fas fa-mail-bulk'></i>
            Portofolio
          </a>
        </li>

        <li className='nav-item link-text' id='themeButton'>
          <a href='#' className='nav-link' name='about' onClick={props.setPage}>
            <i className='fas fa-address-card'></i>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setPage: (e) => dispatch({type: "SET_PAGE", value: e.target.name})
  }
}

export default connect(null, mapDispatchToProps)(navbar);
