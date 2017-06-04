var webpack = require('webpack');
var path = require('path');
module.exports ={
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery' 
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      Timer: path.resolve(__dirname, 'app/components/Timer.jsx'),
      Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
      CountDown: path.resolve(__dirname, 'app/components/CountDown.jsx'),
      appStyles: path.resolve(__dirname, 'app/styles/app.scss')
    }
  },
  module: {
    rules: [
      {test:/\.jsx$/, exclude: /node_modules|bower_components/, use: 'babel-loader'}
    ]
  }
}
