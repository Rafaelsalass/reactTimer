import React from 'react'
import { Link, IndexLink } from 'react-router'

var Nav = React.createClass({
  render (){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React time app</li>
            <li>
              <Link to="/" activeClassName="active" 
                activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
              <Link to="/CountDown" activeClassName="active" 
                activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>created by <a href="https://github.com/">Rafael Salas</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Nav;
