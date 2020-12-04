const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cssFiles = [
    './src/css/normalize.css',
    './src/css/style.less'
];
const jsFiles = [
    './src/script/script.js'
]

function styles() {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'));
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./build/js'));
}

function watch() {
    gulp.watch(cssFiles,styles);
    gulp.watch(jsFiles,scripts)
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch)