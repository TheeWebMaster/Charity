const gulp = require('gulp'),
      rename = require('gulp-rename'),
      svgSprite = require('gulp-svg-sprite');
var config = {
  shape : {
    dimension : {
      dimension: 32,
      maxHeight: 32
    }
  },
  mode: {
    css : {
      sprite: 'sprite.svg',
      render : {
        css : {
          template: './app/gulp/templates/sprite.css'
        }
      }
    }
  }
};
const createSprite = () => {
  return gulp.src('./app/assets/images/icons/**/*.svg')
             .pipe(svgSprite(config))
             .pipe(gulp.dest('./app/temp/sprite/'));
};
const copySpriteCss = () => {
  return gulp.src('./app/temp/sprite/css/*.css')
             .pipe(rename('_sprite.css'))
             .pipe(gulp.dest('./app/assets/styles/modules/components/'));
};
const moveSpriteSvg = () => {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
             .pipe(gulp.dest('./app/assets/images/sprites/'));
};
gulp.task('sprite', gulp.series(createSprite, copySpriteCss, moveSpriteSvg));