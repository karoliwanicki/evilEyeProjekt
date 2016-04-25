// $(function() {

var gulp  = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('pranie', function() {
  console.log('robie pranie');
});

gulp.task('jshintCheck', function(){
  return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))


});



gulp.task('sass', function() {
 return gulp.src('scss/*.scss')
        .pipe(sass({
          errLogToConsole: true,
          outputStyle:'expanded'  /*  jaki bedzie output style trzeba wylaczyc i wlaczyc watchera*/
        }))
        .pipe(gulp.dest('css'))  //folder css do ktorego przekazuje przerobiony plik scss
})

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
})









// });
