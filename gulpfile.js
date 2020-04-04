const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');

sass.compiler = require('node-sass');

/* Used to generate correct build files */
const themes = ['mint', 'antique', 'amber', 'metal', 'mint-dark', 'mint-light', 'royal'];
const flavors = ['default', 'shadows'];

gulp.task('demo', async () => {
/*
* This gulp task creates the following files:
* docs/flavor-name/assets/css/theme-name.css
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
				.pipe(gulp.dest(`./docs/${flavor}/assets/css`));
		});
	});

	gulp.src(['./src/components/*.js', './docs/js/CodeViewer/*.js'])
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./docs/js'))

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
				.pipe(postcss([autoprefixer()]))
				.pipe(rename(`${theme}.css`))
				.pipe(gulp.dest(`./build/css/${flavor}`))
				.pipe(postcss([cssNano()]))
				.pipe(rename(`${theme}.min.css`))
                .pipe(gulp.dest(`./build/css/${flavor}`))
		});
	});

	// You can pass specific js files here to only keep those in the output
	gulp.src('./src/components/*.js')
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./build/js'))
});

gulp.task('run', async () => {
	gulp.series(gulp.task('demo'), gulp.task('build')); 
	gulp.watch(['./**/*.scss', './**./*_.scss'], gulp.series(['demo', 'build']));
});

gulp.watch(['./src/flavors/**/*.scss', './src/flavors/**/*_.scss'], gulp.series(['demo']));