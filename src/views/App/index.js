import React from 'react';
import { Link } from 'react-router';
export default class App extends React.Component {
	render() {
		return (
			<div>
				<Link to='/'><h1>Arty Developer</h1></Link>
				<Link to='/blog'>Blog</Link>
				{this.props.children}
			</div>
		);
	}
}
