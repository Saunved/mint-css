const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const debug = require('gulp-debug');

sass.compiler = require('node-sass');

const themes = ['mint','antique', 'amber', 'metal', 'mint-dark', 'mint-light', 'royal']
const flavors = ['default']


gulp.task('sass', async function(){

    flavors.forEach(flavor => {
        themes.forEach(theme => {
            gulp.src([
                `src/main.scss`
            ])
            .pipe(inject(gulp.src(`src/themes/${theme}.scss`, {read: false, cwd: './'}), {
                starttag: '// inject:{{ext}}',
                endtag: '// endinject',
                transform: function(filepath){
                    console.log(filepath);
                    return `@import "${filepath}";\n@import "./src/flavors/${flavor}/${flavor}.scss";`;
                }
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(rename(`${theme}.css`))
            .pipe(gulp.dest(`./demo/${flavor}/assets/css`))
            .pipe(gulp.dest(`./build/${flavor}`))
            .pipe(cleanCSS())
            .pipe(rename(`${theme}.min.css`))
            .pipe(gulp.dest(`./build/${flavor}`))
        })
    })

})

gulp.watch(['./**/*.scss', './**./*.scss'], gulp.series(['sass']))