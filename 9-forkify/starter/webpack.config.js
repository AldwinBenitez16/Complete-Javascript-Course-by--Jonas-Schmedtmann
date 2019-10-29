// get a node module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // start bundling
    entry: './src/js/index.js',
    // state the absolute path and connect it to new folder where file will rest in
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js' // specifies the file name
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}