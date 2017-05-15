var path = require('path');
module.exports ={
  entry: './app/app.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
      WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx')
    }
  },
  module: {
    rules: [
      {test:/\.jsx$/, exclude: /node_modules|bower_components/, use: 'babel-loader'}
    ]
  }
}
