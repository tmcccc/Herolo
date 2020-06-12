import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>{<NavLink to="/">message manger</NavLink>}</h1>
      <ul>
        <li>{<NavLink to="/addMessage">add message</NavLink>}</li>
        <li>{<NavLink to="/getMessages">get messages</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
