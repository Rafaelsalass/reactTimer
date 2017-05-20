import React from 'react'
import Nav from 'Nav'

var Main = props => {
  return (
    <div>
      <Nav/>
      <Nav/>
      {props.children}
    </div>
  );
}

export default Main;
