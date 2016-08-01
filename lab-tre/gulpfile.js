const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var testFiles = ['lab-tre/test/**/*.js'];
var appFiles = ['lab-tre/lib/**/*.js', 'lib-tre/lib/cowsay.js'];

gulp.task('lint', () => {
  gulp.src(appFiles)
    .pipe(eslint({
      rules: {
        'no-console': 0,
        'indent': [
          2,
          2
        ],
        'quotes': [
          2,
          'single'
        ],
        'linebreak-style': [
          2,
          'unix'
        ],
        'semi': [
          2,
          'always'
        ]
      },
      envs: {
        'es6': true,
        'node': true,
        'browser': true,
        'mocha': true
      },
      ecmaFeatures: {
        'modules': true,
        'experimentalObjectRestSpread': true,
        'impliedStrict': true
      },
      extends: 'eslint:recommended'
    }))
  .pipe(eslint.format());
});

gulp.task('files:watch', function(){
  gulp.watch('./lab-tre/**/**/**', ['default']);
});

gulp.task('mocha', function() {
  return gulp.src(testFiles)
  .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['lint:app'], () => {
  return gulp.src(testFiles)
  .pipe(mocha({reporter: 'nyan'}));
});
