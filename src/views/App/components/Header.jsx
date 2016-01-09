import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
	require('./Header.scss');	
}

export default class header extends React.Component {
	render() {
		return (
			<header id = "header">
				<div className = "title">
					<Link to='/'>{this.props.title}</Link>
				</div>
				<nav>
					<Link to='/blog'>Blog</Link>
					<Link to='/editor'>Editor</Link>
				</nav>
			</header>
		);
	}
}
