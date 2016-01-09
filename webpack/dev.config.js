import path from 'path';
import webpack from 'webpack';

var host = 'localhost';
var port = 3001;

const config = {
	devtool: "source-map",
	entry: [
		`webpack-dev-server/client?http://${host}:${port}`,
		"webpack/hot/only-dev-server",
		"./src/client.js"		
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../static/dist"),
		publicPath: `http://${host}:${port}/dist/`
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
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
            	test: /\.scss$/,
            	loaders: [
            		"style",
            		"css?sourceMap",
            		"sass?sourceMap"
            	]
            }
        ]
	},
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