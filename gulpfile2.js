'use strict'


var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('./CSS/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false,
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "./index.html"
        }
    });
    gulp.watch('./CSS/**/*.scss', style)
    gulp.watch('./**/*.html').on('change',browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
