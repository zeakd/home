import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

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
                test: /\.scss$/,
                loaders: [
                    "style",
                    "css?sourceMap",
                    "postcss",
                    "sass?sourceMap"
                ]
            }
        ]
    },
    sassLoader: {

    },
    postcss: [ 
        autoprefixer({ browsers: ['last 2 versions'] }) 
    ],
    plugins: [  
        new webpack.HotModuleReplacementPlugin()
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         // NODE_ENV: JSON.stringify("development"),
        //         BROWSER: JSON.stringify(true)
        //     }
        // })
    ]
}

export default config;