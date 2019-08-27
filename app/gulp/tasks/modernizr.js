const gulp = require('gulp'),
      modernizr = require('gulp-modernizr');

const  generateModernizrFile = () => {
  const paths = [
    './app/assets/styles/**/*.css',
    './app/assets/scripts/**/*.js'
  ]
  return gulp.src(paths)
             .pipe(modernizr({
              'options': ['setClasses']
             }))
             .pipe(gulp.dest('./app/temp/scripts/modernizr'));
};

module.exports = generateModernizrFile;