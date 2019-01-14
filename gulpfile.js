'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

const nodemon_task = function () {
    nodemon({
        script: './bin/www',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
};

const browsersync_task = function () {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: [
            "public/**/*.*",
            "views/*.pug"],
        port: 3001
    });
};

gulp.task('default', gulp.parallel(nodemon_task, browsersync_task));

