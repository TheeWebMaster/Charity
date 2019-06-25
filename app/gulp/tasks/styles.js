const gulp = require('gulp'),
      autoprefixer = require('autoprefixer'),
      postcss = require('gulp-postcss'),
      vars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      mixins = require('postcss-mixins');
      cssImport = require('postcss-import');
css  = () => {  
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssImport, mixins, autoprefixer, nested, vars]))
             .pipe(gulp.dest('./app/temp/styles/')); 
};
