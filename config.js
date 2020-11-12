 /*
 * @description: 数据库连接配置
 * @Author: along
 * @Date: 2019-11-12
 */

const config = {
  port: 3002,//启动端口号
  database: {
    HOST: 'localhost',//默认主机名
    USERNAME: 'root',//用户名
    PASSWORD: '66666666',//密码
    PORT: '3306',//端口号
    DATABASE: 'project',//数据库表名
  }
}

module.exports = config;