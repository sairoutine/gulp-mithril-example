var browserify = require('browserify');
var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var watch      = require('gulp-watch');

gulp.task('browserify', function() {
	return browserify('./src/js/app.js')
		.bundle()
		//Pass desired output filename to vinyl-source-stream
		.pipe(source('./app.compile.js'))
		// Start piping stream to tasks!
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['browserify']);
});
