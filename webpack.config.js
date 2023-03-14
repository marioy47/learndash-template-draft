const webpackWpConfig = require('@wordpress/scripts/config/webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyPlugin = require('copy-webpack-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');
const path = require('path');

module.exports = {
	...webpackWpConfig,
	entry: {
		// Declare multiple outputs for the various files.
		scripts: './src/js/scripts.js',
		'admin-scripts': './src/js/admin-scripts.js',
		styles: './src/scss/styles.scss',
		'admin-styles': './src/scss/admin-styles.scss',
	},
	output: {
		// Change the output folder from build/ to dist/
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		// Original plugins EXCEPT the generator of "main.assets.php" files.
		...webpackWpConfig.plugins.filter(
			(plugin) =>
				plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
		),

		// Remove the empty JS files that WebPack creates after compiling SCSS files.
		new FixStyleOnlyEntriesPlugin(),

		// Support for RTL languages.
		new RtlCssPlugin('[name]-rtl.css'),

		// Copy HTML files to the dist/ directory.
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', '*.html'),
					to: '[name].html',
				},
			],
		}),

		// Add BrowserSync for automatic browser reload and CSS injection upon changes.
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: {
				baseDir: './dist',
			},
		}),
	], // plugins
};
