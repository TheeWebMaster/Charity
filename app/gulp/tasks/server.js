const gulp = require('gulp'),
      browserSync = require('browser-sync').create();
      
const createServer = () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
};

const injectStyles = () => {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
}; 

module.exports = {
  injectStyles,
  createServer,
  reloadBrowser: browserSync.reload
}