const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const debug = require('gulp-debug');

sass.compiler = require('node-sass');

/* Used to generate correct build files */
const themes = ['mint', 'antique', 'amber', 'metal', 'mint-dark', 'mint-light', 'royal'];
const flavors = ['default', 'plain'];

gulp.task('demo', async () => {
/*
* This gulp task creates the following files:
* demo/flavor-name/assets/css/theme-name.css
* for each flavor-theme combination
*/

	flavors.forEach(flavor => {
		themes.forEach(theme => {
			gulp.src([
				'src/main.scss'
			])
				.pipe(inject(gulp.src(`src/themes/${theme}.scss`, {read: false, cwd: './'}), {
					starttag: '// inject:{{ext}}',
					endtag: '// endinject',
					transform(filepath) {
						return `@import "${filepath}";\n@import "./src/flavors/${flavor}/${flavor}.scss";`;
					}
				}))
				.pipe(sass().on('error', sass.logError))
				.pipe(rename(`${theme}.css`))
				.pipe(gulp.dest(`./demo/${flavor}/assets/css`));
		});
	});
});

gulp.task('build', async () => {
/*
    * This gulp task creates the following files:
    build/flavor-name/theme-name.css
    build/flavor-name/theme-name.min.css
    for each flavor-theme combination
*/

	flavors.forEach(flavor => {
		themes.forEach(theme => {
			gulp.src([`./src/flavors/${flavor}/${flavor}.scss`])
				.pipe(inject(gulp.src(`src/themes/${theme}.scss`, {read: false, cwd: './'}), {
					starttag: '// inject:{{ext}}',
					endtag: '// endinject',
					transform(filepath) {
						return `@import "${filepath}";`;
					}
				}))
				.pipe(sass().on('error', sass.logError))
				.pipe(rename(`${theme}.css`))
				.pipe(gulp.dest(`./build/${flavor}`))
				.pipe(cleanCSS())
				.pipe(rename(`${theme}.min.css`))
                .pipe(gulp.dest(`./build/${flavor}`))
                // .debug();
		});
	});
});

gulp.task('run', async () => {
	gulp.series(gulp.task('demo'), gulp.task('build')); 
	// Gulp.task('demo')();
	// gulp.task('build')();
	gulp.watch(['./**/*.scss', './**./*_.scss'], gulp.series(['demo', 'build']));
});
