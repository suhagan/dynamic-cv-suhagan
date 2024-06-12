import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu() {
  return (


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