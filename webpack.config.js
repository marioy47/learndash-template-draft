const webpackWpConfig = require('@wordpress/scripts/config/webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyPlugin = require('copy-webpack-plugin');
const RtlCssPlugin = require('rtlcss-webpack-plugin');
const path = require('path');

module.exports = {
	...webpackWpConfig,
	entry: {
		// Instead of one mamin.js file, we have 2 stylesheets and 2 javascripts.
		scripts: './src/js/scripts.js',
		'admin-scripts': './src/js/admin-scripts.js',
		styles: './src/scss/styles.scss',
		'admin-styles': './src/scss/admin-styles.scss',
	},
	output: {
		// Change the output folder from build to dist
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		// Remove the empty JS files that webpack creates after compiling SCSS files
		new FixStyleOnlyEntriesPlugin(),

		// remove the DependencyExtractionWebpackPlugin so the main.assets.php file desn't gets generated.
		...webpackWpConfig.plugins.filter(
			(plugin) =>
				plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
		),

		new RtlCssPlugin('[name]-rtl.css'),

		// Copy HTML files to the dist/ directory
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', '*.html'),
					to: '[name].html',
				},
			],
		}),

		// Add browsersync for automatic browser reload
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: {
				baseDir: './dist',
			},
		}),
	], // plugins
};
