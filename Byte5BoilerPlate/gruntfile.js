var gulp = require("grunt");
const sass = require("gulp-sass");
const watchSass = require("gulp-watch-sass");

gulp.task('sass',
    function() {
        return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
            .pipe(sass())
            .pipe(gulp.dest('dist/css'));
    });

