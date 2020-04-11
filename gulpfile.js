const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const inject = require('gulp-inject');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');
var clean = require('gulp-clean');
const purge = require('gulp-purgecss');

sass.compiler = require('node-sass');

/* Used to generate correct build files */
const themes = ['mint', 'antique', 'amber', 'metal', 'mint-dark', 'mint-light', 'royal'];
const flavors = ['default', 'shadows'];

function buildTask(cb) {
	flavors.forEach(flavor => {
		themes.forEach(theme => {
			gulp.src([`./src/flavors/${flavor}/${flavor}.scss`], {sourcemaps: true})
				.pipe(inject(gulp.src(`src/themes/${theme}.scss`, { read: false, cwd: './' }), {
					starttag: '// inject:{{ext}}',
					endtag: '// endinject',
					transform(filepath) {
						return `@import "${filepath}";`;
					}
				}))
				.pipe(sass().on('error', sass.logError))
				.pipe(rename(`${theme}.css`))
				.pipe(postcss([autoprefixer()]))
				.pipe(gulp.dest(`./build/css/${flavor}`, {sourcemaps: '.'}))
		});
	});
	
	cb();
}

function minifyTask(cb){
	flavors.forEach(flavor => {
		themes.forEach(theme => {
			gulp.src([`./src/flavors/${flavor}/${flavor}.scss`], {sourcemaps: true})
				.pipe(inject(gulp.src(`src/themes/${theme}.scss`, { read: false, cwd: './' }), {
					starttag: '// inject:{{ext}}',
					endtag: '// endinject',
					transform(filepath) {
						return `@import "${filepath}";`;
					}
				}))
				.pipe(sass().on('error', sass.logError))
				.pipe(rename(`${theme}.min.css`))
				.pipe(postcss([autoprefixer(), cssNano()]))
				.pipe(gulp.dest(`./build/css/${flavor}`, {sourcemaps: '.'}))
		});
	});

	cb();
}

function buildJsTask(cb){
		// You can pass specific js files here to only keep those in the output
		// gulp.src('./src/components/*.js')
		// .pipe(concat('scripts.min.js'))
		// .pipe(uglify())
		// .pipe(gulp.dest('./build/js'));

		// gulp.src('./src/components/*.js')
		// .pipe(concat('scripts.js'))
		// .pipe(gulp.dest('./build/js'));

		gulp.src(['./build/es5/*.js'])
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));

		gulp.src(['./build/es5/*.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./build/js'));

		cb();
}

function demoTask(cb) {
	/*
	* This gulp task creates the following files:
	* docs/flavor-name/assets/css/theme-name.css
	* for each flavor-theme combination
	*/

	gulp.src(['./build/es5/*.js'])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('./docs/js'));

	flavors.forEach(flavor => {
		themes.forEach(theme => {
			gulp.src([
				'src/main.scss'
			], {sourcemaps: true})
				.pipe(inject(gulp.src(`src/themes/${theme}.scss`, { read: false, cwd: './' }), {
					starttag: '// inject:{{ext}}',
					endtag: '// endinject',
					transform(filepath) {
						return `@import "${filepath}";\n@import "./src/flavors/${flavor}/${flavor}.scss";`;
					}
				}))
				.pipe(sass().on('error', sass.logError))
				// .pipe(purge({content: ['./docs/*.html', './docs/**/*.js']}))
				.pipe(postcss([autoprefixer(), cssNano()]))
				.pipe(rename(`${theme}.css`))
				.pipe(gulp.dest(`./docs/${flavor}/assets/css`, {sourcemaps: '.'}))
		});
	});
	
	cb();	
	
}

function watchTask(cb) {
	gulp.watch(['./**/*.scss', './**/*_.scss', './src/components/*.js'], gulp.series(demoTask));
	cb();
}

async function cleanTask(){
	gulp.src('./build/es5/*.js', {read: false})
	.pipe(clean());
}

exports.default = gulp.series(buildTask, minifyTask, buildJsTask, demoTask);
exports.demo = gulp.series(demoTask);
exports.clean = gulp.series(cleanTask);
exports.watch = gulp.series(watchTask);