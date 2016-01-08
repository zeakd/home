import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import routes from './routes'

export default function (cb) {
    const server = express();

    server.set('views', path.join(__dirname, 'views'));
    server.set('view engine', 'ejs');

    server.set("env", process.env.NODE_ENV || "development");
    server.set("host", process.env.HOST || "0.0.0.0");
    server.set("port", process.env.PORT || 3000);

    server.use(express.static(path.resolve(__dirname, '../static')));

    server.use((req, res) => {
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.       
                var page = renderToString(<RouterContext {...renderProps} />)
                res.status(200).render('index', { page });
            } else {
                res.status(404).send('Not found')
            }
        })
    });

    // server.get('/', (req, res) => {
    //     res.send("hello world");
    // });
    
    // server.post('/post', (req, res) => {

    // });

    return server.listen(server.get("port"), () => cb(server));
}