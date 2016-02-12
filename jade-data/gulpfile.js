// Imports
// -------------------------
var gulp = require('gulp'),
    jade      = require('gulp-jade'),
    data        = require('gulp-data');

// Generate html files from jade
// -------------------------
gulp.task('jade', function() {
    return gulp.src('src/jade/*.jade')
        .pipe(data(function() {
            return require('./src/data/settings.json');
        }))
        .pipe(jade())
        .pipe(gulp.dest('dist/'));
});