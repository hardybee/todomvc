var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('js/app.js').on("change", reload);
  gulp.watch('node_modules/todomvc-app-css/index.css').on("change", reload);
  gulp.watch('index.html').on("change", reload);
});
