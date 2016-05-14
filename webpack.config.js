var path = require('path');
var webpack = require('webpack');
 console.log(__dirname);
module.exports = {
  entry: __dirname + '/js/entry.js',
  output: {
    path: __dirname + '/resources/',
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
};