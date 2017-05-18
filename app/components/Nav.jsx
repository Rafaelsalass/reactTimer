import React from 'react'
import { Link, IndexLink } from 'react-router'

class Nav extends React.Component {
  render (){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React time app</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/CountDown" activeClassName="active-link">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">created by <a href="https://github.com/" target="_blank">Rafael Salas</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Nav;
