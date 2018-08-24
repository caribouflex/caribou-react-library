const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const globby = require('globby');
const thing = require('!transform-loader?deproptypeify!widget/thing');

var configArray = [];

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

configArray.push(global);

// const configs = globby.sync(['src/components/**/*.js', "!src/components/**/*.spec.js"]).map(inputFile => ({
//     input: inputFile,
//     output: {
//         file: inputFile.replace('src', 'dist'),
//         format: 'umd',
//         name: getFileName(inputFile),
//     },
//     plugins: [
//         jsx({
//             factory: 'React.createElement'
//         }),
//         resolve()
//     ]
// }));

const components = globby.sync(['src/components/**/*.js', "!src/components/**/*.spec.js"]).map(inputFile => {
        return {
            name: getFileNamePath(inputFile, false),
            mode: 'development',
            entry: path.resolve(__dirname, inputFile),
            output: {
                path: path.resolve(__dirname, getFileNamePath(inputFile, true)),
                filename: getFileNamePath(inputFile, false) + ".js",
                library: getFileNamePath(inputFile, false),
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
                    },
                    {
                        test: /\.js?$/,
                        loader: `transform-loader?deproptypeify`,
                    },
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    "react": "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styles"
                })
            ]
        };
    }
);

function getFileNamePath(string, isFilePath) {
    var t = string.split("/");
    if (isFilePath) {
        var path = string.replace("src", 'dist');
        var value = path.substring(0, path.lastIndexOf("/"));
        console.log(value);
        return value;
    } else {
        var name = t[t.length - 1].replace(".js", "");
        console.log(name);
        return name;
    }
}

module.exports = configArray.concat(components);

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