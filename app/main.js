import React from 'react';
import { render } from 'react-dom';
import Sing from './component';

class App extends React.Component{
	render(){
		return <Sing />;
	}
}

render(<App />, document.getElementById('app'));
