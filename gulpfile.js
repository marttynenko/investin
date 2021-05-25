const { src,dest,watch} = require('gulp');
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const sourcemaps = require('gulp-sourcemaps')
    

function styles(cb) {
    return src('src/css/style.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
        // .pipe(concat('new.css'))
        // .pipe(cssmin())
        .pipe(sourcemaps.write('sourcemaps'))
        .pipe(dest('src/css'))
    cb();
}



exports.styles = styles;
exports.default = function() {
    watch(['src/css/**/*.sass','src/css/**/*.scss'], styles);
    // watch('src/sass/**/*.scss', styles);
};