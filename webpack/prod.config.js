import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    devtool: "source-map",
    entry: [
        "./src/client.js"       
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../static/dist")
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel'                 
                ],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap")
            },

        ]
    },
    sassLoader: {

    },
    postcss: [ 
        autoprefixer({ browsers: ['last 2 versions'] }) 
    ],
    plugins: [  
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css")
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         // NODE_ENV: JSON.stringify("development"),
        //         BROWSER: JSON.stringify(true)
        //     }
        // })
    ]
}

export default config;