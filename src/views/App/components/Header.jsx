import React from 'react';
import { Link } from 'react-router';
import './Header.scss';

export default class header extends React.Component {
	render() {
		return (
			<header id = "header">
				<div className = "title-block">
					<Link to='/'>
						<span className = "title">{this.props.title}</span>
						<span className = "subtitle">arty [άːrti](비격식) [사람이] 예술가연한[인 체하는]; [물건이] 예술품 행세를 하는.</span>
					</Link>
				</div>
				<nav>
					<Link to='/blog'>Blog</Link>
					<Link to='/editor'>Editor</Link>
				</nav>
			</header>
		);
	}
}


