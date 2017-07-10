var gulp = require("gulp");
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali"))
})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali/css/"))
})
gulp.task("images",function(){
	gulp.src("images/*.{jpg,png,gif,}")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali/images/"))
})
gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali/html/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali/js/"))
})

gulp.task("php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/jiali/"))
})

gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("images/*.{jpg,png,gif}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);

	gulp.watch("*.php",["php"]);
	
})
