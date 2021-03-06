'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('siema',function() { //nazwa taska 
   
   console.log('Siema swiecie!');
   
});


//KOMPILACJA SCSS >> CSS
gulp.task('sass',function(){ //kompilator SASS
   
   return gulp.src('app/scss/**/*.scss') //przeszukuje wszystkie w scss
   .pipe(sass())
   .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
   .pipe(gulp.dest('app/css'));
   
});

//OBSERWOWANIE ZMIAN W PLIKACH
gulp.task('watch',function(){ //
   
// obserwuj  >>CO i gdzie       >> TABLICA TASKÓW
 gulp.watch('app/scss/**/*.scss', ['sass']);
   
});