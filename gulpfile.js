const { src, dest, watch, series } = require('gulp');
const bsync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

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

exports.watch = series([
	copyHtml,
	copyImages,
	copyFonts,
	buildStyles,
	watchChanges,
]);
exports.build = series([copyHtml, copyImages, copyFonts, buildStyles]);
