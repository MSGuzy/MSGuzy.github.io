'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('workflow', function (done) {
    gulp
        .src('./CSS/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false,
            }),
        )
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('./CSS/'))
	done();
})

gulp.task('default', function () {
    gulp.watch('./CSS/**/*.scss', gulp.series('workflow'))
})
