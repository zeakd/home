import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import reducers from '../reducers';
import routes from '../routes';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const initialState = window.__INITIAL_STATE__;
const middleware = syncHistory(browserHistory);

// const finalCreateStore = compose(
//     DevTools.instrument(),
//     applyMiddleware(middleware)
// )(createStore);


const finalCreateStore = applyMiddleware(middleware)(createStore);
const store = finalCreateStore(reducers, initialState);
middleware.listenForReplays(store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
), document.getElementById("root"));