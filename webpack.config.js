var webpack = require('webpack');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
 	entry:{
		a: './src/main.js',
		b: './src/main-react.js',
		c: './src/main_react2.js',
		vendor: ['react','react-dom']
	},
	output : {
		filename : '[name].bundles.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets : ['es2015','react']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=20000'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			}
		]
	},
	 plugins: [
		new CommonsChunkPlugin('commons'),
		new CommonsChunkPlugin('vendors') 
	] 
};