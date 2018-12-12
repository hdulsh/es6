/*nodejs server 端的脚本处理文件
* 这个server 是指 express ，是 web 的 server，这里的作用是架设一个本地虚拟 web 服务器来渲染网页文件，这样就可以构成一个本地虚拟开发环境了
* 虽然文件名叫 server.js，但是gulp 的任务叫 serve*/

import gulp from 'gulp';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if (!args.watch) return cb();// 只有 watch 参数才会触发架设 web 服务器
    var server =liveserver.new(['--harmony','server/bin/www']);
    server.start(); // 开启 web 服务器
    // 这里真正使用了 gulp 的 watch 监听功能
    // 先通知 web 服务器有哪些文件变动了
    //需要注意的是，这里监听的是server/public目录下的，换言之，是编译之后的文件的变化！
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
        // 会被加载到 web 的文件缓存中
        server.notify.apply(server,[file])
    })
    // 重新启动 web服务器，相当于重新加载所有文件，实现了自动加载
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)()
    })
})