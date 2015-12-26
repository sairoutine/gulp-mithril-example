var browserify = require('browserify');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var watch      = require('gulp-watch');
var uglify     = require("gulp-uglify");
var runSequence = require('run-sequence');

gulp.task('browserify', function() {
	return browserify('./src/js/app.js')
		.bundle()
		//Pass desired output filename to vinyl-source-stream
		.pipe(source('./app.compile.js'))
		// Start piping stream to tasks!
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('minify', function() {
	return gulp.src('./dist/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});


gulp.task('build', function(callback) {
	return runSequence(
		'browserify',
		'minify',
		callback
	);
});

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['build']);
});
