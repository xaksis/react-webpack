import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'

import AwesomeComponent from './AwesomeComponent.jsx';
import MyComponent from './MyComponent/MyComponent.jsx'


class MainLayout extends React.Component {
  render () {
    return( 
    	<div>
    		<p> Hello Tutorial!</p>
    		<AwesomeComponent />
    		<MyComponent />
    	</div>
    )
  }
}

render((
	<Router>
    	<Route path="/" component={MainLayout} />
    </Router>
), document.getElementById('app'));
