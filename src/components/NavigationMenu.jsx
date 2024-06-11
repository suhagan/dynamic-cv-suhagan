import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu() {
  return (
    /* <nav className="navigation-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/resume">My Resume</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>*/ 

    <nav className="navigation-menu">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active-link">
            My Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">
            My Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
