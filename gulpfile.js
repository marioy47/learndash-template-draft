const { src, dest, watch, series, parallel } = require('gulp');
const bsync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const buildStyles = () => {
	return src('./src/scss/**/*.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(dest('./dist/css', { sourcemaps: true }))
		.pipe(bsync.stream());
};

const copyHtml = () => {
	return src('./src/*.html').pipe(dest('./dist'));
};

const copyImages = () => {
	return src('./src/images/**/*.*').pipe(dest('./dist/images'));
};

const copyFonts = () => {
	return src('./src/fonts/**/*.*').pipe(dest('./dist/fonts'));
};

const buildJs = () => {
	return src('src/js/scripts.js')
		.pipe(webpackStream(require('./webpack.config.js')), webpack)
		.pipe(dest('dist/js'));
};

const watchChanges = () => {
	bsync.init({
		server: {
			baseDir: './dist',
		},
	});

	watch(['./src/scss/**/*.scss'], buildStyles);
	watch(['./src/images/**/*.*'], copyImages).on('change', bsync.reload);
	watch(['./src/*.html'], copyHtml).on('change', bsync.reload);
};

exports.watch = series(
	copyHtml,
	copyImages,
	copyFonts,
	buildStyles,
	buildJs,
	watchChanges
);
exports.build = parallel(copyHtml, copyImages, copyFonts, buildStyles, buildJs);
