const path = require('path')

const common = require('./webpack.common.js')

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    // open: true,
    stats: 'errors-warnings'
  }
}
