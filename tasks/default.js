/*gulp 的默认脚本文件，会先从这里出发
* 首先执行的任务脚本文件，从这里出发，扩散到其他任务脚本。*/
import gulp from 'gulp';

gulp.task('default',['build']); //默认任务就是执行 build 任务