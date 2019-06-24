const gulp = require('gulp'),
      watch = require('gulp-watch'),
      autoprefixer = require('autoprefixer'),
      postcss = require('gulp-postcss'),
      vars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      mixins = require('postcss-mixins');
      cssImport = require('postcss-import'),
      browserSync = require('browser-sync').create();
const css  = () => {  
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssImport, mixins, autoprefixer, nested, vars]))
             .pipe(gulp.dest('./app/temp/styles/')); 
};
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