const path = require('path')

const common = require('./webpack.common.js')

module.exports = {
  ...common,
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
