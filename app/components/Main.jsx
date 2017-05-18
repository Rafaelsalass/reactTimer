import React from 'react'

var Main = props => {
  return (
    <div>
      <p>Main.jsx render</p>
      {props.children}
    </div>
  );
}

export default Main;
