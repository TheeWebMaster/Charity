const gulp = require('gulp'),
      svgSprite = require('gulp-svg-sprite');
var config = {
}
const createSprite = () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/sprite/'));
};
gulp.task('sprite', createSprite);