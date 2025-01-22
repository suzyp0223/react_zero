// 코드 변화가 있을때마다 npx webpack 명령어 다시 입력해야함.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',

  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  optimization: { minimizer: [] },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    static: './dist',
    hot: true,
  },
};