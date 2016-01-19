import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

var host = 'localhost';
var port = 3001;

const config = {
	devtool: "source-map",
	entry: [
		`webpack-dev-server/client?http://${host}:${port}`,
		"webpack/hot/only-dev-server",
		"./src/client"		
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../static/dist"),
		publicPath: `http://${host}:${port}/dist/`
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    },
	module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                	'react-hot',
                	'babel'                	
                ],
                exclude: /node_modules/
            },
            {
            	test: /\.s?css$/,
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
	    new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                // NODE_ENV: JSON.stringify("development"),
                BROWSER: JSON.stringify(true)
            }
        })
	]
}

export default config;