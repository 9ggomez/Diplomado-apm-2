var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


gulp.task('concat-css', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('source/css/'));
});

gulp.task('concat-files', function(){
	gulp.src('source/js/*.js')
		.pipe(concat('lab35.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});

gulp.task('default', ['concat-css', 'concat-files'], function(){
  return gulp.src('source/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});