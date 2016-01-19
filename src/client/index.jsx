import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import _reducers from '../reducers';
import routes from '../routes'

const reducers = combineReducers(Object.assign({}, _reducers, {
    routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
), document.getElementById("root"));