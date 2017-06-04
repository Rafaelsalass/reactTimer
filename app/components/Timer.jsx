import React from 'react'
import Clock from 'Clock'

class Timer extends React.Component{
  render (){
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
};

export default Timer;
