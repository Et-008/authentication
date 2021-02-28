import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import './navbar.css';
let Navbar = (props) => {
    let {url} = useRouteMatch();
    return (
        <nav className="Navbar">
          <h1 className="NavTitle">Homepage</h1>
          <ul className="NavList">
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to={`${url}/about`}><li>About</li></NavLink>
            <li><p onClick={props.Logout}>Logout</p></li>
          </ul>
        </nav>
    )
}

export default Navbar;