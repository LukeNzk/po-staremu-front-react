import React from 'react';
import { Link } from 'react-router-dom'

import routes from '../Routes.js';

function MenuItem(props) {
  return (
      <li className="nav-item">
          <Link to={props.link} className="nav-link">{props.name}</Link>
      </li>
  );
}

function MainMenu() {    
  const menuItems = Object.keys(routes).map(function(route) {
      return <MenuItem name={routes[route].title} link={routes[route].url}/>
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/home">Po Staremu</Link>
        <div>
          <ul className="navbar-nav ml-auto">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainMenu;
