/*处理页面编译的*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        // 如果命令行有 watch 参数，则调用自动刷新
        .pipe(gulpif(args.watch,livereload()))
})