const  gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      nested = require('postcss-nested'),
      variables = require('postcss-simple-vars'),
      cssImport = require('postcss-import'),
      autoprefixer = require('autoprefixer'),
      mixins = require('postcss-mixins'),
      borwserSync = require('browser-sync');

css = () => {
  return gulp.src('./app/assets/styles/styles.css')
              .pipe(postcss([cssImport, mixins, autoprefixer, nested, variables]))
              .pipe(gulp.dest('./app/temp/styles')); 
};
cssInjection = () => {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(borwserSync.stream());
};


