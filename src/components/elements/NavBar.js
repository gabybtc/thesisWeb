import React from 'react';
import './NavBar.css';
import { MJIcon, home, contact } from '../../images/images'

const NavBar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-left">
          <a className="navbar-logo">
            <img src={MJIcon} alt="Logo" className="MJ-Nav-Icon" />
            <span>Latino Persecution and the History of Cannabis in the US</span>
          </a>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li className="navbar-item">
            <img src={home} alt="homelogo" className="navbar-link" />
            </li>
            <li className="navbar-item">
            <img src={contact} alt="contactlogo" className="navbar-link" />
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;