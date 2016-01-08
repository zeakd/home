import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import nodemon from 'nodemon';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import npmPackage from './package.json'
import webpackDevConfig from './webpack/dev.config.js';
import webpackProdConfig from './webpack/prod.config.js';

gulp.task('build:client', (done) => {
    webpack(webpackDevConfig, (err, stats) => {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        done();
    });
})



gulp.task('webpack-dev-server', (done) => {
    var compiler = webpack(webpackDevConfig);

    new WebpackDevServer(compiler, {
        contentBase: 'http://localhost:3001',
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackDevConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(3001, 'localhost', err => {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:3001/webpack-dev-server/index.html");
        done();
    })
})

gulp.task('nodemon', () => {
    nodemon({
        execMap: {
            js: 'node'
        },
        script: path.join(__dirname, npmPackage.main),
        // ignore: ['*'],
        watch: [
            'src/server.js',
            'src/routes.js',
            'src/models'
        ],
        ext: 'js'
    }).on('restart', function() {
        console.log('Restarted!');
    });
})

gulp.task('serve:dev', (done) => {
    runSequence('build:client', ['nodemon', 'webpack-dev-server'], done);
})