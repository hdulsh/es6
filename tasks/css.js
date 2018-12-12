/*css相关
* 这里并没有做更多的 css 编译处理，css 编译通常有 less，sass等，需要借助不同的插件来处理，不过这里只是直接输出*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app/**/*.css') //将源文件复制到目标目录
        .pipe(gulp.dest('server/public'))//gulp.dest负责写文件
        .pipe(gulpif(args.watch,livereload()))
})