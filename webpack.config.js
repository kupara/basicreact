var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/client.js',
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ],
    preLoaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react']
        }
      }
    ]
  },
  eslint: {  
    configFile: '.eslintrc'
  },
  output: {
    path: __dirname + '/app/js/',
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
