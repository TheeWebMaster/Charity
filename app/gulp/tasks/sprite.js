const gulp = require('gulp'),
      rename = require('gulp-rename'),
      svgSprite = require('gulp-svg-sprite'),
      clean = require('gulp-clean'),
      svg2png = require('gulp-svg2png');

const config = {
  shape: {
    id: {
      separator: '-'
    }
  },
  mode: {
    css : {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite).replace('svg', 'png');
          }
        }
      },
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
const deletePrevSvg = () => {
  return gulp.src(['./app/temp/sprite/css','./app/assets/images/sprites'], {read : false, allowEmpty: true})
             .pipe(clean())
};
const pngCopy = () => {
  return gulp.src('./app/assets/images/sprites/*.svg')
             .pipe(svg2png())
             .pipe(gulp.dest('./app/assets/images/sprites/'))
};
gulp.task('createSprite', gulp.series(deletePrevSvg, createSprite, copySpriteCss, moveSpriteSvg, pngCopy));

module.exports = gulp.series(deletePrevSvg, createSprite, copySpriteCss, moveSpriteSvg, pngCopy);