const gulp = require('gulp'),
      imagemin = require('gulp-imagemin');

const compression = () => {
  return gulp.src('./app/assets/images/**/*')
         .pipe(imagemin())
         .pipe(gulp.dest('./app/temp/images'));
}
gulp.task('compress-images',  compression);