import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

//import styles
import './myComponent.scss'

class MyComponent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="my-component">
				<h2>My Custom Component</h2>
				<ButtonToolbar>
					<Button bsStyle="primary">My Button</Button>
					<Button bsStyle="danger">My Dangerous Button</Button>
				</ButtonToolbar>
			</div>
		)
	}
}

export default MyComponent