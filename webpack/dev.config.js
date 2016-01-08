import path from 'path';
import webpack from 'webpack';

const config = {
	devtool: "source-map",
	entry: [
		"webpack-dev-server/client?http://localhost:3001",
		"webpack/hot/only-dev-server",
		"./src/client.js"		
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "../static/dist"),
		publicPath: "http://localhost:3001/dist"
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
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
            }
        ]
	},
	plugins: [	
	    new webpack.HotModuleReplacementPlugin()
	]
}

export default config;