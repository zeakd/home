import 'babel-polyfill';
import express from 'express';
import path from 'path';
import proxy from 'proxy-middleware';
import url from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

var app = express();

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.set("host", process.env.HOST || "0.0.0.0");
app.set("port", process.env.PORT || 3000);
if (__DEVELOPMENT__) {
    app.use('/dist', proxy(url.parse('http://localhost:3001/dist')));
}

app.use(express.static(path.resolve(__dirname, '../static')));

function renderFullPage(renderedContent, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${renderedContent}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
   `
}

app.use((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.       
            var rendered = renderToString(<RouterContext {...renderProps} />)
            res.status(200).send(renderFullPage(rendered, {}));
        } else {
            res.status(404).send('Not found')
        }
    })
});

app.listen(app.get("port"), () => {
    console.log(`express is running on ${app.get("port")}`);
})

