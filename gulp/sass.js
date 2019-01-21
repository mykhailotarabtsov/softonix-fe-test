var gulp = require('gulp');
var sass = require('gulp-sass');
var cfg = require('../package.json').config;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(cfg.src.sass + '/**/*.{scss, sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(cfg.src.css));
});