const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
// 清空之前打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 提取CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// CSS Tree Shaking
// const PurgecssPlugin = require("purgecss-webpack-plugin")
// 压缩CSS
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
const PATHS = {
  src: path.join(__dirname, '../src')
}
module.exports =merge(baseConfig, {
  mode: 'production',
  // 打包时只显示需要内容
  stats: {
    timings: true, // 时间
    warnings: false, // 警告(一般都是警告打包文件体积过大)
    modules: false, 
    entrypoints: false,
    children: false
  },  
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex|axios)[\\/]/
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        swiper: {
          name: 'swiper',
          chunks: 'all',
          priority: 10,
          test: /[\\/]node_modules[\\/](swiper|vue-awesome-swiper)[\\/]/
        }
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css'
    }),
//     new PurgecssPlugin({
//       // paths: glob.sync(path.join(__dirname, '../*.html'))
//       paths: glob.sync(path.join(__dirname, '../src/*/*'),  { nodir: true })
//     })
    // new OptimizeCssAssetsPlugin()
  ],
})