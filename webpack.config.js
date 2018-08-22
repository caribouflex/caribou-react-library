const path = require('path');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode:'production',
    entry: path.resolve(__dirname, 'src/components/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ]
};