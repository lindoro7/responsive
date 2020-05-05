module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('src/static/sass/main.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        'include css': true,
        pretty: true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: [
          "last 2 versions",
          "> 1%",
          "IE 10"
        ],
      }))
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Style"
      }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('dist/static/css/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}