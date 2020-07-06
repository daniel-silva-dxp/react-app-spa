const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
				use: { loader: 'html-loader' }
			},
			{
				test: /\.css$/i,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title: 'SPA with Reactjs',
			template: path.join(__dirname, 'public', 'index.html'),
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash].css'
		})
	],
	resolve: {
		alias: {
			src: path.join(__dirname, 'src'),
			components: path.join(__dirname, 'src', 'components')
		}
	}
};
