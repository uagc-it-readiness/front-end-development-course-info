var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var header = require('gulp-header');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


var banner = '/* This file was generated on ' + new Date() + '  */\n';

var sassPath = 'src/sass/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));

});



//We are adding sass as a gulp dependancy. It will run 'sass' before it starts the browser sync. 
//This makes sure that we have the latest CSS.
gulp.task('browserSync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

//Starts up a dev server for us
//It also watches files and reloads the browser when they change.
gulp.task('dev', ['browserSync', 'sass', ], function () {
    gulp.watch('src/scripts/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch(sassPath, ['sass']);
});


gulp.task('default', ['sass']);
