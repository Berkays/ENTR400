'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/*.*",
            "views/*.pug"],
        port: 3001,
    });
});

gulp.task('nodemon', function (done) {
    nodemon({
        script: './bin/www'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
        , done: done
    });
})

gulp.task('default', gulp.parallel('nodemon', 'browser-sync'));

