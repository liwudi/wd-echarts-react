/**
 * Created by mapbar_front on 2018/10/11
 */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: path.resolve(__dirname, './index.html')
});

module.exports = {
    mode: 'production',
    // 配置入口文件
    entry: {
        app: './src/main.js',
        index: './src/index.js',
        main: './src/WdEchartsReact.js'
    },
    // 出口文件目录为根目录下dist, 输出的文件名为main
    output: {
        path: path.resolve(__dirname, 'libs'),
        filename: '[name].js',
    },
    plugins: [
        htmlWebpackPlugin,
        new UglifyJSPlugin(),
    ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [ "style-loader", "css-loader"]},
        ]
    },
}
