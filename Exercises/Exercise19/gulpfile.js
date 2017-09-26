var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var jsonServer = require("gulp-json-srv");

var server = jsonServer.create({port:3001});

gulp.task("startDB", function(){
    return gulp.src("server/db.json")
        .pipe(server.pipe());
});

//We are adding sass as a gulp dependancy. It will run 'sass' before it starts the browser sync. 
//This makes sure that we have the latest CSS.
gulp.task('browserSync',  function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

//Starts up a dev server for us
//It also watches files and reloads the browser when they change.
gulp.task('dev', ['browserSync', 'startDB'], function () {
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.css', browserSync.reload);
});

gulp.task('default', ['dev']);