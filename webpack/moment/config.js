var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../../node_modules/moment-timezone-all/builds/moment-timezone-with-data.js'),
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'moment.js',
    publicPath: '../../public/dist',
    library: 'moment',
    libraryTarget: 'window'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};