// pattern from https://github.com/gpbl/isomorphic500/blob/master/index.js
require('babel-register');

global.__BROWSER__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require("./src/server");