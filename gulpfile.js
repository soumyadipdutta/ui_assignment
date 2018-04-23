const gulp = require('gulp');
const compass = require('gulp-compass');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const minifyjs = require('gulp-js-minify');
const imagemin = require('gulp-imagemin');
const fontmin = require('gulp-fontmin');

gulp.task('html', function(){
    gulp.src('./src/*.html')
    .pipe(gulp.dest('output/'))
});

gulp.task('mainStyle', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'output/css',
      sass: 'src/scss',
      sourcemap: true
    }))
    .pipe(gulp.dest('output/css'));
});

gulp.task('fntmin', function () {
    return gulp.src('src/fonts/*')
        .pipe(fontmin())
        .pipe(gulp.dest('output/fonts'));
});

gulp.task('jsminify', function(){
  gulp.src([
    	'./src/js/jquery.min.js',
    	'./src/js/slick.min.js',
    	'./src/js/custom.js'
  	])
  	.pipe(concat('main.js'))
  	.pipe(plumber())
    .pipe(minifyjs())
    .pipe(gulp.dest('output/js'));
});

gulp.task('imgmin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('output/images'))
});

gulp.task('default', ['html', 'mainStyle','fntmin','jsminify', 'imgmin'], function() {
   gulp.watch(['src/*.html','src/scss/**/*.scss','src/fonts/*','src/js/*.js','src/images/*'], function() {
      gulp.run('html','mainStyle','fntmin','jsminify','imgmin');
   });
});