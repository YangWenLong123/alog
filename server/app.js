const koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
// const koaSessionMinimal = require('koa-session-minimal');
// const koaMysqlSession = require('koa-mysql-session');
const views = require('koa-views')

const config = require('../config');
const routers = require('./router/index');

const app = new koa();

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , './../static')
))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

//初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen( config.port , () => {
    console.log(`the server is start at port ${config.port}`);
});