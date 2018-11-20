
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const devWebpackConfig = merge(baseWebpackConfig.clientConfig, {
  mode: 'development', // 开发环境
})
module.exports = devWebpackConfig