const path = require("path");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const externalPlugins = require('webpack-node-externals');

const clientConfig = { // web环境打包
  target: 'web',
  entry: { // 入口配置
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: { // 出口配置
    path: path.resolve(__dirname, '../dist'), // 打包后的文件存放的地方
    // filename: "bundle.js" // 打包后输出文件的文件名
    filename: "[name].js" // 打包后输出文件的文件名与入口文件名一致
  },
  module: { // 模块：栗子 解读css，图片如何转换、压缩
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({ // 在build目录下自动生成index.html
      title: '', // 指定其title
      template: 'ejs-compiled-loader!' + path.resolve(__dirname, '../src/index.html'), // 指定要打包的html路径和文件名
      filename: 'index.html', // 指定输出路径和文件名
      chunks: ['main'], // 页面中所需要的js
      minify: {
        collapseWhitespace: true // 压缩选项
      }
    })
  ], // 扩展插件
  devServer: { // 配置 webpack 开发服务功能：webpack-dev-servernod
    contentBase: path.resolve(__dirname, '../dist'), // 配置开发服务运行时的文件根目录
    host: 'localhost', // 服务器监听的主机地址 localhost || 127.0.0.1
    compress: true, // 服务器是否启动gzip等压缩
    port: 5200, // 监听的端口号
    open: true, // 自动打开浏览器
    // historyApiFallback: true, // 不跳转
    // inline: true // 实时刷新
  }
}

const serverConfig = { // node环境打包
  target: 'node',
  entry: { // 入口配置
    index: path.resolve(__dirname, '../index.js')
  },
  output: { // 出口配置
    path: path.resolve(__dirname, '../dist'), // 打包后的文件存放的地方
    filename: "[name].js" // 打包后输出文件的文件名与入口文件名一致
  },
  externals: [externalPlugins()],
  module: { // 模块：栗子 解读css，图片如何转换、压缩
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
      }
    ]
  },
}

module.exports = {clientConfig, serverConfig};