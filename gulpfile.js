var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var publicPath = './src/AppBundle/Resources/public/';
var paths = {
  sass: [publicPath + 'scss/**/*.scss']
};
console.log(paths);

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src(publicPath + 'scss/styles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(publicPath + 'css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(publicPath + 'css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});
