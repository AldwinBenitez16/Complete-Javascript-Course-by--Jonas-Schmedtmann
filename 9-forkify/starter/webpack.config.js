// get a node module
const path = require('path');

module.exports = {
    // start bundling
    entry: './src/js/index.js',
    // state the absolute path and connect it to new folder where file will rest in
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js' // specifies the file name
    },
    mode: 'development'
}