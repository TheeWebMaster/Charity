const gulp = require('gulp'),
      modernizr = require('gulp-modernizr');

const  generateModernizrFile = () => {
  return gulp.src('./app/assets/styles/**/*.css')
             .pipe(modernizr({
              'options': ['setClasses']
             }))
             .pipe(gulp.dest('./app/temp/scripts/modernizr'))
};

module.exports = generateModernizrFile;