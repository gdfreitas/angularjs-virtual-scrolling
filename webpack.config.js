const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebPackPlugin({ template: './src/index.html', filename: 'index.html' })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }

};