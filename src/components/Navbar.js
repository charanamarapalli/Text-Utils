import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
{/*      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
 */}     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}}`}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropdownName}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Skills</a></li>
            <li><a className="dropdown-item" href="/">Experience</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Dairy</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.changeToggle}></input>
        {/* if mode is dark - set text color to light using text-light class. and vice */}
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    dropdownName: PropTypes.string.isRequired
};

/* Navbar.defaultProps ={
    title: "Your Webpage Name",
    home: "Home section",
    about: "Enter About us",
    dropdownName: "dropdown name"
}; */



