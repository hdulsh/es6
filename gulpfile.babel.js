
/*gulp 的默认配置文件，但由于本项目的架构改为了以 tasks 目录为中心，
所以需要在默认配置文件里面配置一个引用 tasks 目录的处理，这样 gulp 执行的时候
会通过默认配置文件找到 tasks 目录来执行里面的真正的脚本*/

import  requireDir from 'require-dir'; // node的文件夹处理模块

requireDir('./tasks')  // 引入./tasks目录