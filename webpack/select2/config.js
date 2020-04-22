var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './webpack/select2/imports.ts',
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'select2.js',
    publicPath: '../../public/dist'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};