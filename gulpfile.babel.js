import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import nodemon from 'nodemon';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import del from 'del';

import npmPackage from './package.json'
import webpackDevConfig from './webpack/dev.config.js';
import webpackProdConfig from './webpack/prod.config.js';

gulp.task('clean', (done) => {
    del(['./static/dist']);
    done();
})

gulp.task('build', (done) => {
    runSequence('build:client', done);
});

gulp.task('build:client', (done) => {
    webpack(webpackProdConfig, (err, stats) => {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        done();
    });
});

gulp.task('webpack-dev-server', (done) => {
    var compiler = webpack(webpackDevConfig);

    var host = 'localhost';
    var port = 3001;

    new WebpackDevServer(compiler, {
        contentBase: `http://${host}:${port}`,
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackDevConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(3001, 'localhost', err => {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", `http://${host}:${port}/webpack-dev-server/index.html`);
        // done();
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
            'src/server',
            'src/routes.jsx',
            'src/containers/',
            'src/components/'
        ],
        ext: 'js,jsx'
    }).on('restart', function() {
        console.log('Restarted!');
    });
})

gulp.task('serve', ['serve:dev'])

gulp.task('serve:dev', done => {
    runSequence('clean', ['nodemon', 'webpack-dev-server'], done);
})

