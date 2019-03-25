const gulp = require('gulp')
const del = require('del')
const usemin = require('gulp-usemin')
const rev = require('gulp-rev');
const path = require('path');


const srcDir = 'src';
const destDir = 'apostila';

const clean = destDir => () => del(destDir)

const move = ({from, to}) => () => gulp
    .src(from)
    .pipe(gulp.dest(to))

const cssPipeline = ({entryFile, entryDir, dest}) => () => gulp
    .src(path.join(entryDir, entryFile), {base: entryDir})
    .pipe(usemin({
        css: [rev()]
        ,js: [rev()]
    }))
    .pipe(gulp.dest(dest))

const task = (taskName, fn) => (fn.displayName = taskName, fn)

gulp.task('default', gulp.series(
    task('Clean', clean(destDir))
    ,task('Move files', move({
        from: [`${srcDir}/**/*`, `!${srcDir}/styles/**/*`]
        ,to: destDir
    }))
    ,task('Pack CSS and JS', cssPipeline({
        entryFile: `index.html`
        ,entryDir: srcDir
        ,dest: destDir
    }))
))