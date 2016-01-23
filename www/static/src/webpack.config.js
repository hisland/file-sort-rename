var webpack = require("webpack");
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/static/dist/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url?limit=100000'
    }, {
      test: /\.jpg$/,
      loader: 'url?prefix=/img/&limit=10000'
    }]
  },
  // devtool: 'source-map',
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize: true
  //   })
  // ],
}
