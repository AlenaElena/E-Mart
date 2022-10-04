const { src, dest, watch, parallel, series }        = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat               = require('gulp-concat');
const autoprefixer         = require('gulp-autoprefixer');
const uglify               = require('gulp-uglify');

//const imagemin             = require('gulp-imagemin');//npm install imagemin@7.1.0
//const rename               = require('gulp-rename');
const del                  = require('del');
const browserSync          = require('browser-sync').create();


  function browsersync(cd) {
    browserSync.init({
      server: {
        baseDir: 'app/'
      }
    });
    cd();
  }

  function styles() {
    return src('app/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
  }

  function scripts() {
    return src ([  
      //'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
      'node_modules/swiper/swiper-bundle.js',
      'node_modules/js-image-zoom/js-image-zoom.js',
      'node_modules/drift-zoom/dist/Drift.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
  }

  function build() {
    return src([
      'app/**/**.html',
      'app/css/style.min.css',
      'app/js/main.min.js'
    ], {base: 'app'})
    .pipe(dest('dist'))
  }

  function cleanDist() {
    return del('dist')
  del
  }

function watching(done) {
  watch(['app/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/app.min.js'],scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
  done()
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;  

// exports.images = images;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.build = series(cleanDist, build);

exports.default = parallel(styles, scripts, browsersync, watching)