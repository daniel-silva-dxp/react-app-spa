import React, { Component } from 'react';

import './style.css';
import Button from 'components/button';

class App extends Component {
	render() {
		return (
			<div className="my-style">
				Daniel Silva!
				<Button>ENTER</Button>
			</div>
		);
	}
}

export default App;
