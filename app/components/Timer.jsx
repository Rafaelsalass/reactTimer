import React from 'react'
import Clock from 'Clock'

class Timer extends React.Component{
  render (){
    return (
      <div>
        <h1 className="text-center">Timer</h1>
        <Clock/>
      </div>
    );
  }
};

export default Timer;
