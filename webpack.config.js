const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    contentBase: '/dist',
    open: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
