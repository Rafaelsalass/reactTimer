import React from 'react'
import WeatherMessage from 'WeatherMessage'
import WeatherForm from 'WeatherForm'
import openWeatherMap from 'openWeatherMap'

var Weather = React.createClass({
  getDefaultProps() {
    return{
    };
  },

  getInitialState() {
    return{
      isLoading: false
    };
  },

  handleUpdates(place) {
    this.setState({isLoading: true});
    var that = this;
    openWeatherMap.getTem(place).then(temp => {
      that.setState({
        place: place,
        temp: temp,
        isLoading: false
      });
    }, errorMessage => {
      that.setState({
        isLoading: false,
        place: undefined
      });
      alert(errorMessage);
    });
  },

  render() {
    var {isLoading, place, temp} = this.state;
    function renderWeatherMessage () {
      if (isLoading){
        return <h5>Fetching weather...</h5>;
      } else if (temp && place) {
        return <WeatherMessage place={place} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onUpdates={this.handleUpdates}/>
        {renderWeatherMessage()}
      </div>
    );
  }
});

export default Weather;
