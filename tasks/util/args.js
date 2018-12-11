import yargs from 'yargs';

/*命令行参数*/
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

    .argv

export default args
