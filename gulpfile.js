'use strict';

var gulp = require('gulp'),
	scss = require('gulp-sass'),
	wiredep = require('wiredep').stream,
	minifyCss = require('gulp-minify-css'),
	rename = require('rename'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	runSequence = require('run-sequence'),
	sprite = require('gulp-sprite-generator'),
	spritesmith = require('gulp.spritesmith');

// sprite
// gulp.task('sprites', function() {
// 	var spriteOutput;

// 	spriteOutput = gulp.src("app/*.css")
// 	.pipe(sprite({
// 		baseUrl:         "./app/sprImage",
// 		spriteSheetName: "sprite.png",
// 		spriteSheetPath: "/app/csss"
// 	}));

// 	spriteOutput.css.pipe(gulp.dest("./app/css"));
// 	spriteOutput.img.pipe(gulp.dest("./app/img"));
// });

gulp.task('sprite', function() {
	var spriteData = 
		gulp.src('./app/sprImage/*.*') // source path of the sprite images
			.pipe(spritesmith({
                imgName: '../img/sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                // cssTemplate: 'scss.template.mustache',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            }));

	spriteData.img.pipe(gulp.dest('./app/img')); // output path for the sprite
	spriteData.css.pipe(gulp.dest('./app/scss/includes')); // output path for the CSS
});

// html
gulp.task('html', function () {
	return gulp.src('app/*.html')
	.pipe(useref())
		// .pipe(gulpif('js/*.js', uglify()))
		// .pipe(gulpif('css/*.css', minifyCss()))
		.pipe(gulp.dest('www'));
	});

// bower
gulp.task('bower', function(){
	gulp.src('./app/index.html')
	.pipe(wiredep({
		directory: 'app/bower_components'
	}))
	.pipe(gulp.dest('./app'));
});

// css
gulp.task('css', function () {
	return gulp.src('./app/scss/**/*.scss')
	.pipe(scss())
	// .pipe(minifyCss())
	.pipe(autoprefixer({
		browsers: ['last 2 versions', '> 1%', 'ie 9'],
		cascade: false
	}))
	// .pipe(rename("bundle.min.css"))
	.pipe(gulp.dest("./www/css"))
	// .pipe(connect.reload());
});

// clean
gulp.task('clean', function(done) {
	del('./www', done);
});

gulp.task('assets-images', function() {
	return gulp.src('./app/img/**/*.{png,jpg,svg}')
	.pipe(gulp.dest('./www/img'));
});

gulp.task('assets-videos', function() {
	return gulp.src('./app/videos/**/*')
	.pipe(gulp.dest('./www/videos'));
});

gulp.task('assets', function() {
	return gulp.start('assets-images', 'assets-videos');
})

// // connect
gulp.task('connect', function() {
	connect.server({
		root: './www',
		livereload: false,
		port: 2020
	});
});

// // watch
gulp.task('watch', function(){
	gulp.watch('./app/scss/**/*.scss', ['css']);
	gulp.watch(['./app/js/main.js'], ['html']);
	gulp.watch('app/index.html', ['html']);
	gulp.watch(['./app/{videos,img}/*.html'], ['assets']);
	gulp.watch('bower.json', ['bower']);
});

// gulp.task('watch', function(done) {
//     // gulp.watch(['./app/**/*.html'], ['templates']);
//     gulp.watch(['./app/js/**/*.js'], ['scripts']);
//     gulp.watch(['./app/sass/**/*.scss'], ['styles']);
//     gulp.watch(['./app/{fonts,img}/*.html'], ['assets']);
// });

gulp.task('go', function(done) {
	runSequence(['connect', 'watch'], done);
});

