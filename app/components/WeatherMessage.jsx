import React from 'react'

var WeatherMessage = ({temp, place}) => {
  if (place != undefined){
    return(
      <div>
        <h2 className="text-center">It's {temp}°, in {place}.</h2>
      </div>
    );
  } else {
    return false;
  }
}

export default WeatherMessage
