const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      imports = require('postcss-import'),
      mixins = require('postcss-mixins'),
      variables = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      autoprefixer = require('autoprefixer'),
      hexrgba = require('postcss-hexrgba');

const compileStyles = () => {  
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([imports, mixins, autoprefixer, nested, variables, hexrgba]))
             .pipe(gulp.dest('./app/temp/styles/')); 
};
module.exports = {
  compileStyles
};