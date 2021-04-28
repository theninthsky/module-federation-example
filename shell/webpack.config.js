const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const AutomaticVendorFederation = require('@module-federation/automatic-vendor-federation')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'static/js/[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js'
      },
      shared: AutomaticVendorFederation({
        packageJson: require('./package.json'),
        exclude: [],
        ignorePatchVersion: true
      })
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
