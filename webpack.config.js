const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const global = {
    name:"index",
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

const components = {
    name: "components",
    mode: 'development',
    // entry: path.resolve(__dirname, 'src/components/button/Button.js'),
    // entry: path.resolve(__dirname, 'src/components/patate/Patate.js'),
    entry: {
        './dist/components': './src/components'
    },
    output: {
        // path: path.resolve(__dirname, './dist/components'),
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
        library: "[name]",
        libraryTarget: "umd"
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            // options: {
            //     presets: ['@babel/preset-env'],
            //     plugins: [require('@babel/plugin-proposal-object-rest-spread')]
            // }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "react": "React",
            "react-dom": "ReactDOM",
            "styled-components": "styles"
        })
    ]
};

module.exports = [global, components];

// module.exports = {
//     mode: 'production',
//     entry: path.resolve(__dirname, 'src/components/index.js'),
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'index.js',
//         library: '',
//         libraryTarget: 'commonjs'
//     },
//     externals: [nodeExternals()],
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         }]
//     }
//     // plugins: [
//     //     new BundleAnalyzerPlugin()
//     // ]
// };