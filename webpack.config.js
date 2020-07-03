const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')


module.exports = {
    devtool: 'source-map',
    entry: [
		'react-hot-loader/patch',
		// 'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[hash].js',
		publicPath: ''
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /src/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                include: /src/,
                use: { loader: "html-loader" }
            },
            {
                test: /\.css$/i,
                 use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            "title": 'SPA with Reactjs',
            "template": path.join(__dirname, 'public', 'index.html'),
            "filename": "./index.html",
        })
    ]
};
