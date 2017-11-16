var gulp = require('gulp');
    sass = require('gulp-sass');
    watch = require('gulp-watch');
    browserSync = require('browser-sync').create();
    useref = require('gulp-useref');
    uglify = require('gulp-uglify');
    gulpIf = require('gulp-if');
    cssnano = require('gulp-cssnano');
    imagemin = require('gulp-imagemin');
    cache = require('gulp-cache');
    del = require('del');
    concat = require('gulp-concat');
    ngAnnotate = require('gulp-ng-annotate');

gulp.task('useref', function() {
    return gulp.src('src/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify({
            mangle: false
          }).on('error', function(e){
            console.log(e);
         })))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: ["./", "./src" ]
        },
    });
});

gulp.task('images', () => {
    return gulp.src('src/images/**/*.jpg')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', () => {
    return del.sync('dist');
});

gulp.task('build', ['clean', 'sass', 'useref', 'images'], () => {
    console.log('Building files');
});