const gulp = require('gulp'),
      gulpSprite = require('gulp-svg-sprite');

const config = {
  mode : {
    css : {
      render : {
        css: {
          template : './app/gulp/templates/sprite.css'
        }
      }
    }
  }
};
const sprite  = () => {
  return gulp.src('./app/assets/images/icon/**/*.svg')
             .pipe(gulpSprite(config))
             .pipe(gulp.dest('./app/temp/sprite/'));
};
gulp.task('sprite', sprite);