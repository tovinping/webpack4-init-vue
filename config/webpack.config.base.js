const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包环境
const isProduction = process.env.BUILD_ENV === 'pro'
const loaderCSS = isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader'
const bundleJS = isProduction ? 'static/js/[name].[chunkhash:8].js' : 'static/js/[name].[hash].js'

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: bundleJS
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader:'eslint-loader',
        enforce: "pre", // 编译前检查
        exclude: /node_modules/, // 不检测的文件
        include: [path.resolve(__dirname, '../src')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, '../src')
        ]
      },    
      {
        test: /\.(css|scss)$/,
        use: [
          loaderCSS,
          'css-loader',
          'postcss-loader', 
          'sass-loader'
        ]
      },      
      {
        test: /\.(png|jpg|webp|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[hash:8].[ext]',
              outputPath: 'static/images'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash:8].[ext]',
          outputPath: 'static/videos'
        }
      },
      {
        test: /\.(mp3|flac|aac)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash:8].[ext]',
          outputPath: 'static/videos'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash:8].[ext]',
          outputPath: 'static/fonts'
        }
      }
    ]
  },
  // 装载虚拟目录插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin()
  ],
}