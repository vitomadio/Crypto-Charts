let gulp = require('gulp');
let minify = require('gulp-minify');
var uglifycss = require('gulp-uglifycss');
var gp_concat = require('gulp-concat')

gulp.task('css', () => {
  return gulp.src([
    './assets/css/*.css',
    './src/components/HomeTable/HomeTable.css',
    './src/components/DashboardHeader/DashboardHeader.css',
    './src/components/Header/Header.css',
    './src/components/HomeFooter/HomeFooter.css',
    './src/components/InfoBox/InfoBox.css',
    './src/components/LineChart/LineChart.css',
    './src/components/PairBox/PairBox.css',
    './src/components/PairStripe/PairStripe.css',
    './src/components/RegisterHeader/RegisterHeader.css',
    './src/components/RingLoader/RingLoader.css',
    './src/components/ToolTip/ToolTip.css'
  ])
    .pipe(uglifycss())
    .pipe(gp_concat('styles-min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', () => {
  return gulp.src('dist/app.bundle.js')
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', gulp.series('js', 'css'));