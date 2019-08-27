const gulp = require('gulp'),
      clean = require('gulp-clean'),
      imagemin = require('gulp-imagemin'),
      gulpUsemin = require('gulp-usemin'),
      cssnano = require('gulp-cssnano'),
      uglify = require('gulp-uglify'),
      rev = require('gulp-rev'),
      browserSync = require('browser-sync').create();;

const wipeOutDist = () => {
  return gulp.src('./dist', {read: false, allowEmpty: true})
             .pipe(clean());
};

const minifyImg = () => {
  const paths = [
    './app/assets/images/**/*',
    '!./app/assets/images/icons',
    '!./app/assets/images/icons/**/*'
  ]
  return gulp.src(paths)
              .pipe(imagemin())
              .pipe(gulp.dest('./dist/assets/images/'));
};

const usemin = () => {
  return gulp.src('./app/index.html')
             .pipe(gulpUsemin({
               css: [function() {return rev()}, function() {return cssnano()}],
               js: [function() {return rev()}, function() {return uglify()}]
             }))
             .pipe(gulp.dest('./dist'));
};

const preView = () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
};
gulp.task('build', gulp.series(wipeOutDist, minifyImg, usemin, preView));