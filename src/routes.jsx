import React from 'react';
import { Route } from 'react-router';

import Home from './containers/Home';
import Blog from './containers/Blog';
import Editor from './containers/Editor';

export default (
    <Route path="/" component={Home}>
        <Route path="/blog" component={Blog}/>  
        <Route path="/editor" component={Editor}/>  
    </Route>
);