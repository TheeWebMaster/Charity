const gulp = require('gulp'),
      gulpSprite = require('gulp-svg-sprite');

const config = {
  mode : {
    css : {
      render : {
        css: './app/temp/sdf.css'
      }
    }
  }
};
const sprite  = () => {
  return gulp.src('./app/assets/images/icon')
             .pipe(gulpSprite(config))
             .pipe(gulp.dest(''));
};
gulp.task('sprite', sprite);