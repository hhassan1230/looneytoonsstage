var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
		path.resolve(__dirname, 'app/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
    loaders: [
    { 
    	test: /\.css$/, loader: 'style!css?modules' 
    },
    { 
    	test: /\.png$/, loader: 'file'
    },
    { 
        test: /\.m4v$/, loader: 'file' 
    },
    {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel'
    }
    ]
  }
}