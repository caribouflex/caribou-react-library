const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('babel', function () {
    return gulp.src(['src/**/*.js', '!src/components/**/*.spec.js', '!src/utils/*'])
        .pipe(babel({
            presets: ["env", "react"],
            plugins: ['add-module-exports']
        }))
        .pipe(gulp.dest('lib/'))
});

gulp.task("browserify", ['babel'], function () {
    return gulp.src(['lib/components/**/*.js', '!lib/components/index.js'])
    .pipe(browserify({
        transform: ['browserify-global-shim'],
        standalone : "Patate"
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['babel', 'browserify']);