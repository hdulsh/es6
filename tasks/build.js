/*构建打包相关*/

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';


// 用中括号的意思是任务是平行的，不存在先后
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']))