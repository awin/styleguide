var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../../node_modules/vue/dist/vue.js'),
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'vue.js',
    publicPath: '../../public/dist',
    library: 'Vue',
    libraryTarget: 'window'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};