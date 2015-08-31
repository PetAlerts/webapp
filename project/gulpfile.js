var gulp = require('gulp');
gulp.task('default', function(){

});

var compass = require('gulp-compass');
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }));
});

var concat = require('gulp-concat');
gulp.task('scripts', function() {
  return gulp.src([
    './javascripts/app/app.js',
    './javascripts/app/routes.js',
    './javascripts/app/*/*.js',
    './javascripts/app/*/*/*.js',
    './javascripts/app/*/*/*/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./javascripts/'));
});