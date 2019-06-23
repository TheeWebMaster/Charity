const gulp = require('gulp'),
      watch = require('gulp-watch'),
      borwserSync = require('browser-sync').create();
      const cssInjection = () => {
        return gulp.src('./app/temp/styles/styles.css')
                   .pipe(borwserSync.stream());
      };
function eye() {
  borwserSync.init({
    notify: false,
    server: {
       baseDir: 'app'
    }
  });
  watch('./app/*.html', borwserSync.reload);
  watch('./app/assets/styles/**/*.css', gulp.series(css, cssInjection));
};
gulp.task('default', eye);