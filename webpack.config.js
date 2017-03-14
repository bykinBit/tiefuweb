const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        // login: path.resolve('./dev/admin/login.jsx'),
        // admin: path.resolve('./dev/admin/admin.jsx'),
        // iron_pot: path.resolve('./dev/admin/iron_pot.jsx'),
        // designer: path.resolve('./dev/admin/designer.jsx'),
        // message: path.resolve('./dev/admin/message.jsx'),
        // update: path.resolve('./dev/admin/update.jsx'),
        // news: path.resolve('./dev/admin/news.jsx'),
        // about_us: path.resolve('./dev/admin/about_us.jsx')
        // index: path.resolve('./dev/index/index.jsx'),
        cooper: path.resolve('./dev/index/cooper.jsx')
        // culture: path.resolve('./dev/index/culture.jsx'),
        // detail: path.resolve('./dev/index/detail.jsx'),
        // details: path.resolve('./dev/index/details.jsx'),
        // inform: path.resolve('./dev/index/inform.jsx'),
        // productShow: path.resolve('./dev/index/productShow.jsx')
    },
    output: {
        path: path.resolve('./public/index/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })]
};