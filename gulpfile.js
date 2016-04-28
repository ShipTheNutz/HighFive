const gulp = require('gulp');
const babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('tjs', () => {
    return gulp.src('src/js/App.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('dev:watch',function () {
    gulp.watch('src/**/*.*', ['sass', 'tjs']);
});