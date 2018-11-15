
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production', // 生产环境
})
module.exports = devWebpackConfig