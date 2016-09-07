'use strict';

const gulp = require('gulp');
const jsonlint = require('gulp-jsonlint');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const gulpSequence = require('gulp-sequence');

gulp.task('jsonlint', () => {
  return gulp.src(['**/*.json', '!node_modules/**'])
    .pipe(jsonlint())
    .pipe(jsonlint.failOnError());
});

gulp.task('eslint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('mocha', () => {
  return gulp.src('test/test.js', {read: false})
    .pipe(mocha());
});

gulp.task('validate', ['jsonlint', 'eslint']);

gulp.task('test', gulpSequence('validate', 'mocha'));

gulp.task('default');
