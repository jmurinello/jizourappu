const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'client/dist'),
      publicPath: '/',
    },
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new CleanWebpackPlugin(['client/dist'], {
      root: process.cwd(),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modules: ['node_modules', 'client/src'],
    extensions: ['.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devServer: options.devServer,
  devtool: options.devtool,
  stats: options.stats,
  target: 'web',
  performance: options.performance || {},
});
