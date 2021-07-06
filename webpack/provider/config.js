var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '../../src/css/providerTheme.scss'),
  output: {
    path: path.resolve(__dirname, '../../public/dist/'),
    filename: 'providerTheme.scss',
    publicPath: '../../public/dist',
    library: 'provider',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        options: {
          failOnHint: true,
          configuration: require('../../tslint.json'),
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: [
            'css-loader',
            'sass-loader',
            {
              loader: '@epegzz/sass-vars-loader',
              options: {
                syntax: 'scss',
                options: {},

              },
            },
          ],
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
  plugins: [new ExtractTextPlugin('provider.css')],
};