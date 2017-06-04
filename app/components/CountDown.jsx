import React from 'react'
import Clock from 'Clock'

class CountDown extends React.Component{
  render (){
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
};

export default CountDown;
