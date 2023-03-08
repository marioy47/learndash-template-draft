const path = require('path');
const webpackWpConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...webpackWpConfig,
	entry: './src/js/scripts.js',
	output: {
		...webpackWpConfig.output,
		path: path.join(__dirname, 'dist'),
	},
};
