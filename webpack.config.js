const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: { 
    index: './src/index.js',
    about: './src/about/about.js',
    stats: './src/stats/stats.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/, 
      use: { loader: "babel-loader" }, 
      exclude: /node_modules/ 
    },
    {
      test: /\.css$/, 
      use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 
      'postcss-loader']
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, 
              disable: true, 
            },
          },
        ]
     },
     {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]'
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({ 
      inject: false,
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({ 
      inject: false,
      template: './src/stats.html',
      filename: 'stats.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}