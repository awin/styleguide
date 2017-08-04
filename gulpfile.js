let gulp = require('gulp');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
let clean = require('gulp-clean');

gulp.task('default', ['fonts', 'css', 'js']);

gulp.task('clean', () => {
    return gulp.src([
            './public/dist',
            './public/fonts',
            './public/css',
            './public/js'
        ])
        .pipe(clean());
});

gulp.task('fonts', () => {
    return gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'));
})

gulp.task('copy-css', () => {
    return gulp.src([
            './bower_components/font-awesome/css/font-awesome.css',
            'src/css/**.css'
        ])
        .pipe(gulp.dest('public/css'));
});
gulp.task('copy-js', () => {
    return gulp.src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            'src/js/*.js'
        ])
        .pipe(gulp.dest('public/js'));
});

gulp.task('css', ['copy-css'], () => {
    return gulp.src([
            './public/css/*.css'
        ])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({level: { 1: {
            tidySelectors: false // controls selectors optimizing; defaults to `true`,
        }}}))
        .pipe(concat('awin.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/dist/'));
});

gulp.task('js', ['copy-js'], () => {
    return gulp.src([
            './public/js/jquery.js',
            './public/js/*.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('awin.js'))
        .pipe(sourcemaps.write('.', {includeContent: true}))
        .pipe(gulp.dest('./public/dist'));
});
