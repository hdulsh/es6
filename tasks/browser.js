
/*负责监听源代码的变化，然后将变化的内容分别通知不同的任务进行处理，
这是真正的实现文件监听的任务*/
import gulp from 'gulp';
import args from './util/args';



gulp.task('browser',(cb)=>{
    if (!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts'])
    gulp.watch('app/**/*.ejs',['pages'])
    gulp.watch('app/**/*.css',['css']) //任务列表是一个数组
});