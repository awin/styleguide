let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default',() => {
  return gulp.src('./public/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
    .pipe(concat('awin.css'))
    .pipe(sourcemaps.write('maps', {includeContent: false}))
    .pipe(gulp.dest('public/minified'));
});
