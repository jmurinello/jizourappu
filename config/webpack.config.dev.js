const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.config.base')({
  mode: 'development',
  entry: [
    path.join(process.cwd(), 'client/src/components/App.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'client/static/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(process.cwd(), 'client/dist'),
    compress: true,
    inline: true,
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      },
    },
  },
  devtool: 'eval-source-map',
  performance: {
    hints: false,
  },
});
