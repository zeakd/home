// pattern from https://github.com/gpbl/isomorphic500/blob/master/index.js

require('babel-register');
require('./ignorer')(['.scss']);

require("./src/server").default(function (app) {
  	console.log(
	  	"Express %s server listening on %s:%s", 
	  	app.get("env"), 
	  	app.get("host"), 
	  	app.get("port"));
});
