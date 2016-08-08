import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import MyComponent from './MyComponent/MyComponent.jsx'


class App extends React.Component {
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

render(<App/>, document.getElementById('app'));