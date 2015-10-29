var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss');

gulp.task('css', function () {
    var processors = [autoprefixer, cssnext, precss];

    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function () {
    // default
});
