var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    path.join(__dirname, './src/Gauge.js')
  ],
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  }
}
