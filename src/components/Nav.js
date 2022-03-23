import '../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="top-navbar">
      <Link className="logo-container" to="/">
        <p className="logo">David Narvaez</p>
      </Link>
      <ul className="nav-links">
        <Link to="/Projects">
          <li>Projects</li>
        </Link>
        <Link to="/About">
          <li>About me</li>
        </Link>
      </ul>
    </nav>
  );
};
