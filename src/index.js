'use strict';

import React,{ Component } from 'react';
import ReactDOM  from 'react-dom';
import { hot } from 'react-hot-loader'
import component from './component';

component();

class HelloWorld extends Component {
	render(){
		return (
			<h1>Hello world!</h1>
		)
	}
}
ReactDOM.render(<HelloWorld />, document.getElementById('app'));


