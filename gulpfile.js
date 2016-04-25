var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function(){
  gulp.src('src/css/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream:true}))
});

gulp.task('scripts', function(){
  gulp.src(['src/scripts/*.js'])
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/scripts'))
});

gulp.task('watch', function(){
  gulp.watch('src/css/style.scss', ['styles']);
  gulp.watch('src/scripts/*.js', ['scripts']);
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: "."
    }
  });
});

gulp.task('default', ['styles', 'scripts', 'watch', 'browser-sync']);