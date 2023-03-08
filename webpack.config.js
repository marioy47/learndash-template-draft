const webpackWpConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...webpackWpConfig,
	entry: './src/js/scripts.js',
};
