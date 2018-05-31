var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './webpack/bootstrap/imports.ts',
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'bootstrap.js',
    publicPath: '../../public/dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};