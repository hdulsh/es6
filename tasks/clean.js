/*清理相关*/
import gulp from 'gulp';
import del from 'del';


gulp.task('clean',()=>{
    return del(['server/public','server/views']) //清空指定文件目录，因为每次编译要覆盖原来编译的文件，要先clean.
})