const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = merge(commonConfig, config);
