var gulp = require('gulp');

gulp.task('build', function () {
  console.log('Building'),
  gulp.start('copy'),
  console.log('Buil Done');
});