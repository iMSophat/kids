const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: {
        js: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]/[name]@nintrea.[contenthash].[name]',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: process.env.BLOG_TITLE ?? 'Kid Calculate' ,
            style: 'css/tailwind.css',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            },
            // {
            //     test: /\.css$/i,
            //     include: path.resolve(__dirname, 'src'),
            //     use: ['style-loader', 'css-loader', 'postcss-loader'],
            // },

        ],
    }
}