'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassGlob = require('gulp-sass-glob');

// Gulp task for sass
gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))

	.pipe(gulp.dest('./dist/css/'))
});

// Gulp task to move images to /dist
gulp.task('images', function() {
  return gulp.src(['./src/images/**'])
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
