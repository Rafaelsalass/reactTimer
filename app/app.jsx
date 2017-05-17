import React from 'react'
import ReactDom from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'

// load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();
// load custom style
import 'style-loader!css-loader!sass-loader!appStyles'

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route> 
  </Router>,
  document.getElementById('app')
)
