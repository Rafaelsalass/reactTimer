import React from 'react'
import WeatherMessage from 'WeatherMessage'
import WeatherForm from 'WeatherForm'
import openWeatherMap from 'openWeatherMap'
import ErrorMessage from 'ErrorMessage'

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
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    
    var that = this;
    openWeatherMap.getTem(place).then(temp => {
      that.setState({
        place: place,
        temp: temp,
        isLoading: false
      });
    }, e => {
      that.setState({
        isLoading: false,
        place: undefined,
        errorMessage: e
      });
    });
  },

  render() {
    var {isLoading, place, temp, errorMessage} = this.state;
    function renderWeatherMessage () {
      if (isLoading){
        return <h5 className="text-center">Fetching weather...</h5>;
      } else if (temp && place) {
        return <WeatherMessage place={place} temp={temp}/>;
      }
    }

    function renderError(){
      if (errorMessage != undefined) {
        return (
          <ErrorMessage errorMessage={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onUpdates={this.handleUpdates}/>
        {renderWeatherMessage()}
        {renderError()}
      </div>
    );
  }
});

export default Weather;
