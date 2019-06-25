const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create();
const cssInjection = () => {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
};
 const eye = () => {
  browserSync.init({
    notify: false,
    server: {
       baseDir: 'app'
    }
  });
  watch('./app/*.html', browserSync.reload);
  watch('./app/assets/styles/**/*.css', gulp.series(css, cssInjection));
};
gulp.task('default', eye);