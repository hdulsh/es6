/*处理gulp 命令行输入处理*/
import yargs from 'yargs';


const args = yargs
//区分环境
    .option('production',{
        boolean:true,
        default:false,
        describle:'min all scripts'
    })
//控制监听环境中修改的文件
    .option('watch',{
        boolean:true,
        default:false,
        describle:'watch all files'
    })
//日志
    .option('verbose',{
        boolean:true,
        default:false,
        describle:'log'
    })
//sourcemap
    .option('sourcemaps',{
        describle:'force the creation of sourcemaps'
    })

    .option('port',{
        string:true,
        default:8080,
        describle:'server port'
    })

    .argv // 会返回对象，里面有之前配置的参数

export default args
