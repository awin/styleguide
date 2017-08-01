let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default',() => {
    // Assets
    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));
    // CSS
    gulp.src([
            './bower_components/font-awesome/css/font-awesome.css',
            './public/css/*.css'
        ])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({level: { 1: {
            tidySelectors: false // controls selectors optimizing; defaults to `true`,
        }}}))
        .pipe(concat('awin.css'))
        .pipe(sourcemaps.write('.', {includeContent: true}))
        .pipe(gulp.dest('./public/dist/'));
    // JS
    gulp.src('./public/js/*.js')
        .pipe(concat('awin.js'))
        .pipe(gulp.dest('./public/dist'));
});