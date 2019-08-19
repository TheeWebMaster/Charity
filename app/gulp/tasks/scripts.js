const webpack = require('webpack-stream'),
      gulp = require('gulp'),
      babel = require('gulp-babel');
const config = require('../../../webpack.config.js');

const bundle = () => {
  return gulp.src('./app/assets/scripts/*.js')
         .pipe(webpack(config))
         .pipe(gulp.dest('./app/temp/scripts/bundled/'));
};
const es5 = () => {
  return gulp.src('./app/temp/scripts/bundled/*.js')
         .pipe(babel({
           presets: ['@babel/env']
         }))
         .pipe(gulp.dest('./app/temp/scripts/ECMAscript5/'));
}
module.exports = {
  bundle,
  es5
}