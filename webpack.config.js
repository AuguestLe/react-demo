var path = require('path');
var webpack = require('webpack');
var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");


//mock 数据
function rewriteUrl(replacePath) {
	return function (req,opt) {
		var queryIndex = req.url.indexOf('?');
		var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

		req.url = req.path.replace(opt.path,replacePath) + query;
		console.log("rewriting",req.originalUrl,req.url);
	};
}


module.exports = {
	entry: [
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/index.js')
    ],
	output:{
		publicPath: "/static/",
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ["*",".js",".jsx",".css",".json"],
		alias: {
			"react": pathToReact,
			"react-dom": pathToReactDOM
		}
	},
	devServer: {
		hot:true
	},
	module: {
		rules: [
			{
	          test: /\.js$/,
	          loaders: ['react-hot-loader/webpack', 'babel'],
	          exclude: path.resolve(__dirname, 'node_modules')
	        },
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader'
			// },
			{
		      test: /\.css/,
		      loader: 'style!css'
		    },
		    {
		      test: /\.less/,
		      loader: 'style!css!less'
		    }
			
		],
		noParse: [pathToReact,pathToReactDOM]
	},
	plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
}