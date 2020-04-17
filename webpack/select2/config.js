var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../../node_modules/select2/dist/js/select2.js'),
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'select2.js',
    publicPath: '../../public/dist'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};