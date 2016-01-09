import React from 'react';
import { Link } from 'react-router';

export default class header extends React.Component {
	render() {
		return (
			<header id = "header">
				<div>
					<Link to='/'>{this.props.title}</Link>
				</div>
				<nav>
					<Link to='/blog'>Blog</Link>
				</nav>
			</header>
		);
	}
}
