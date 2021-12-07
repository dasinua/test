var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var autoprefixer = require('gulp-autoprefixer');




// server
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('js/*.js').on('change', browserSync.reload);

});

// sass
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    // .pipe(autoprefixer({
    //     browsers: ['last 3 version'],
    //     cascade: false
    // }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

// start
gulp.task('default', ['server']);

// copy
gulp.task('copy', function() {
  return gulp.src([
    'css/**/*',
    'js/**/*',
    'fonts/**/*',
    'images/**/*',
    'favicon.png',
    'mail.php',
    'index.html',
    ], {
      base: '.'
      })
  .pipe(gulp.dest('dist'));
});

// gulp
// gulp copy