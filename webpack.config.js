var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    filename: 'awin.js',
    publicPath: './public/dist',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        options: {
          failOnHint: true,
          configuration: require('./tslint.json'),
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap',
        }),
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts/', // where the fonts will go
              publicPath: '/fonts/', // override the default path
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new ExtractTextPlugin('awin.css')],
};
