import React from 'react';
import { Link } from 'react-router';
export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Wow</h1>
				<Link to='/blog'>Blog</Link>
				{this.props.children}
			</div>
		);
	}
}
