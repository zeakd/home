import React from 'react';
import { Route } from 'react-router';
import App from './views/App';
import Blog from './views/Blog';

export default (
	<Route path="/" component={App}>
		<Route path="/blog" component={Blog}/>	
	</Route>
);
