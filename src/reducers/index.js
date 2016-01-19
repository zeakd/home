import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import admin from './admin';
import renderSource from './renderSource';

const rootReducer = combineReducers({
    admin,
    renderSource,
    routing
});

export default rootReducer;