let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['fonts', 'css', 'js']);

gulp.task('fonts', () => {
    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));
})

gulp.task('css', () => {
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
});

gulp.task('js', () => {
    gulp.src([
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './bower_components/jquery/dist/jquery.js',
            './public/js/*.js',
        ])
        .pipe(concat('awin.js'))
        .pipe(gulp.dest('./public/dist'));
});