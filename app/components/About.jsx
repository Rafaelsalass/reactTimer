import React from 'react'

var About = props => {
  return (
    <div>
      <h1 className="text-center page-title">About!</h1>
      <p className="text-justify">This a simple weather app created to learn
        about React. Interesting links:
      </p>
      <dl>
        <dt>
          <a href="https://facebook.github.io/react/">React</a>
        </dt>
        <dd className="text-justify">This is the framework used to create the
        user interface of this website</dd>
        <dt>
          <a href="https://openweathermap.org/">OpenWeatherMap</a>
        </dt>
        <dd className="text-justify">Api used to search weather given a city name</dd>
        <dt>
          <a href="http://foundation.zurb.com/">Foundation</a>
        </dt>
        <dd className="text-justify">Giving style to the app</dd>
      </dl>
    </div>
  );
};

export default About;
