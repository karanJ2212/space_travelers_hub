import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="header">
          <img className="logo-img" alt="logo" src={logo} />
          <span className="logo-name">Space Traveler&lsquo;s Hub</span>
        </Link>
        <ul className="header-cate">
          <li className="list">
            <NavLink to="/" className="nav-links">
              Rockets
            </NavLink>
          </li>
          <span className="line">|</span>
          <li className="mission">
            <NavLink to="/missions" className="nav-links">
              Mission
            </NavLink>
          </li>
          <span className="line">|</span>
          <li className="profile">
            <NavLink to="/profile" className="nav-links">
              My profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <hr className="nav-bar-line" />
      </div>
    </>
  );
}
export default Navbar;
