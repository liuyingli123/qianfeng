var gulp = require("gulp");

gulp.task("copy-index",function(){
	//gulp.src("index.html")
	//.pipe(gulp.dest("D:\phpStudy\WWW\test"));
	
	gulp.src("index.html").pipe(gulp.dest("D:/phpStudy/WWW/liuyingli/"));
});

gulp.task('watch',function(){
	gulp.watch(['*.html'],['copy-index']);
	//gulp.watch(['images/*.jpg'],['copyjpgfile']);
	
});
