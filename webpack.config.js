var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const themes = ['awin', 'afiliados', 'bboutiqueprivatenetwork', 'etsypn','nikepartners','nikevip','pntest','kerstintest','noreportingtest'];

module.exports = themes.map(theme => ({
  name: theme,
  entry: {
    [theme]: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    filename: '[name].js',
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
                files: [
                  path.resolve(__dirname, `src/css/themes/${theme}.json`),
                ],
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
  plugins: [new ExtractTextPlugin('[name].css')],
}));

