'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');


gulp.task('default', ['server','browser-sync'], function () {
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/*.*",
            "views/*.pug"],
        port: 3001,
    });
});

gulp.task('server', function () {
    exec('node ./bin/www');
});