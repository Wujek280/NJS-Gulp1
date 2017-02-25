'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('siema',function() { //nazwa taska 
   
   console.log('Siema swiecie!');
   
});

gulp.task('sass',function(){ //kompilator SASS
   return gulp.src('app/scss/**/*.scss') //przeszukuje wszystkie w scss
   .pipe(sass())
   .pipe(gulp.dest('app/scss'));
});