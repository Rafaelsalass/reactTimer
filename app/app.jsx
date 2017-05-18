import React from 'react'
import ReactDom from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import CountDown from 'CountDown'

// load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();
// load custom style
import 'style-loader!css-loader!sass-loader!appStyles'

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="/CountDown" component={CountDown}/>
    </Route> 
  </Router>,
  document.getElementById('app')
)
