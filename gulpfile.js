var gulp, gulpEmblem;

gulp = require('gulp');
gulpEmblem = require('gulp-emblem');

gulp.task('templates', function(){
    gulp.src(['emblem/*.emblem'])
        .pipe(gulpEmblem({
            outputType: 'amd'
        }))
        //.pipe(concat('templates.js'))
        .pipe(gulp.dest('javascript/templates/'));
});

gulp.task('watch', function () {
   gulp.watch('emblem/*.emblem', ['templates']);
});