let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default',() => {
    // CSS
    gulp.src('./src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(concat('awin.css'))
        .pipe(sourcemaps.write('.', {includeContent: true}))
        .pipe(gulp.dest('./public/dist/'));
    // JS
    gulp.src('./src/js/*.js')
       .pipe(concat('awin.js'))
       .pipe(gulp.dest('./public/dist'));
});
