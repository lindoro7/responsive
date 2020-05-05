module.exports = function() {
  $.gulp.task('image', function () {
    return $.gulp.src('src/static/img/*.*')
      .pipe($.gulp.dest('dist/static/img/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}