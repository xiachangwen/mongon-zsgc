const gulp = require("gulp");
const saser = require("gulp-sass");
const minjs = require("gulp-uglify");
const mincss = require("gulp-minify-css");
const servert = require("gulp-webserver");

gulp.task("webserve", () => {
	return gulp.src("./src/")
			.pipe(servert({
				open:true,
				port:8000,
				livereload:true,
				proxies:[
					{source:"/api/findUsr",target:"http://localhost:3000/api/findUsr"},
					{source:"/api/findone",target:"http://localhost:3000/api/findone"},//详细信息
					{source:"/api/addupdate",target:"http://localhost:3000/api/addupdate"},//更改信息
					{source:"/api/getdelete",target:"http://localhost:3000/api/getdelete"},//删除
					{source:"/api/getadd",target:"http://localhost:3000/api/getadd"}//添加
				]
			}))
})