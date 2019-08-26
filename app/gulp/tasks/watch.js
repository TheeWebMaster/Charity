const gulp  = require('gulp'),
      watch = require('gulp-watch');

const eye = () => {
  const server = require('./server'),
        scripts = require('./scripts'),
        styles = require('./styles');
        generateModernizrFile = require('./modernizr');

  watch('./app/*.html', server.reloadBrowser);
  watch('./app/assets/styles/**/*.css', gulp.series(styles.compileStyles, server.injectStyles));
  watch('./app/assets/scripts/**/*.js', gulp.series(generateModernizrFile, scripts.bundle, scripts.es5, server.reloadBrowser));
};

gulp.task('watch', eye);