// Imports
// -------------------------
var gulp = require('gulp'),
    jade      = require('gulp-jade'),
    del       = require('del'),
    data        = require('gulp-data');

// Generate html files from jade
// -------------------------
gulp.task('jade', function() {
    return gulp.src('src/jade/*.jade')
        .pipe(data(function() {             // Insert json file
            return require('./src/data/settings.json');
        }))
        .pipe(jade({
            pretty: true                    // False for compress code
        }))
        .pipe(gulp.dest('dist/'));
});

// Watch task
// -------------------------
gulp.task('watch', function () {
    gulp.watch('src/jade/**/*.jade', ['jade']);
});


// Clean task
// -------------------------
gulp.task('clean', function () {
    return del('dist/*.html');
});