import React from 'react'
import { Link, IndexLink } from 'react-router'

var Nav = React.createClass({
  onFormSubmit(e){
    var place = this.refs.place.value;
    e.preventDefault(); 
    var encodedPlace = encodeURIComponent(place);
    if (place.length > 0) {
      this.refs.place.value = '';
      window.location.hash = `#/?place=${encodedPlace}`;
    }
  },
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather app</li>
            <li>
              <IndexLink to="/" activeClassName="active" 
                activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" 
                activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" 
                activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onFormSubmit}>
            <ul className="menu">
              <li><input type="search" ref="place" placeholder="Enter city name"></input></li>
              <li><button className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

export default Nav;
