var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../../node_modules/vuex/dist/vuex.js'),
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'vuex.js',
    publicPath: '../../public/dist',
    library: 'Vuex',
    libraryTarget: 'window'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};