const path = require('path');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {
                    babelrc: true
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader?sourceMap',
                        options: {
                            plugins: [
                                autoprefixer({browsers: ['last 2 versions']}),
                                csswring
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin([{from: 'static', to: path.resolve(__dirname, 'dist')}])
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
