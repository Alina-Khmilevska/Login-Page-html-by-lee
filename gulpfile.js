const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('./scss/style.scss')  // source .scss file
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));  // destination .css file
}

exports.default = function() {
    gulp.watch('./scss/style.scss', compileSass);
}
