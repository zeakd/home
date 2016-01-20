import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'redux-simple-router';
import reducers from '../reducers';
import routes from '../routes';
import initStore from '../helpers/init-store';
import DevTools from '../containers/DevTools';

const initialState = window.__INITIAL_STATE__;
const store = initStore(initialState);

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>{routes}</Router>
            <DevTools />
        </div>
    </Provider>
), document.getElementById("root"));