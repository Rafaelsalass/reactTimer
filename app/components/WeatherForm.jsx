import React from 'react'

var WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();
    var place = this.refs.place.value;
    if( place.length > 0 && place.charAt(0) != ' '){
      this.refs.place.value = '';
      this.props.onUpdates(place);
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="place" placeholder="Enter city name"></input>
          <button>Get Weather</button>
        </form>
      </div> 
    );
  }
});

export default WeatherForm;
