const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = {
  ...common,
  mode: 'production',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/[name].[contenthash].js',
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: /\@license/i
      })
    ],
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
