var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractStylesConfig = new ExtractTextPlugin('style.css', {
	allChunks: true
});


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  //modules
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
      	test: /\.scss$/,
      	loader: ExtractTextPlugin.extract('css!sass')
      	//loaders: ['style', 'css', 'sass']
      },
      {
      	test: /\.(jpe?g|png|gif|svg)$/i,
	    loaders: [
	        'file?hash=sha512&digest=hex&name=[hash].[ext]',
	        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
	    ]
	   }
    ]
  }, 
  //plugins
  plugins: [HTMLWebpackPluginConfig, ExtractStylesConfig]
};

module.exports = config;