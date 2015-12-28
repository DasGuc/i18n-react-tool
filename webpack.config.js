const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const plugins = [];
const root = __dirname;

const DEVTOOLS = process.env.DEVTOOLS ? JSON.parse(process.env.DEVTOOLS) : false;

/** PLUGINS **/
plugins.push(new webpack.NoErrorsPlugin());

plugins.push(new ExtractTextPlugin('css/main.css', {
  disable: false,
  allChunks: true
}));

plugins.push(new webpack.DefinePlugin({
  'process.env':{
    'DEVTOOLS': DEVTOOLS
  }
}));

plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'DEV': true
  }
}));

const config = {
  entry: {
    'js/bundle': './client/index.js'
  },
  output: {
    publicPath: '/assets/',
    filename: '[name].js',
    path: './build/assets'
  },
  cache: false,
  debug: true,
  devtool: 'sourcemap',
  devServer: {
    contentBase: './public',
    inline: true
  },
  module: {
    preloaders: {
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader'
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true&outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
        )
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=100000&name=[name].[ext]'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      containers: path.resolve(__dirname, 'client/containers'),
      container: path.resolve(__dirname, 'client/containers'),
      components: path.resolve(__dirname, 'client/components'),
      component: path.resolve(__dirname, 'client/components'),
      styles: path.resolve(__dirname, 'client/styles'),
      style: path.resolve(__dirname, 'client/styles'),
      helpers: path.resolve(__dirname, 'client/helpers'),
      helper: path.resolve(__dirname, 'client/helpers'),
      locales: path.resolve(__dirname, 'client/locales')
    }
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;
