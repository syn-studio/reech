const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')

const paths = {
    styles: {
        src: 'assets/**/*.scss',
        dest: 'assets/'
    }
}

const style = () => {
    return gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

const watch = () => {
    gulp.watch(paths.styles.src, style)
}

exports.style = style

const build = gulp.series(style, watch)

gulp.task('build', build)
gulp.task('default', build)