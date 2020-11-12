<p align="center">
  <img width="300" src="https://raw.githubusercontent.com/koajs/koa/master/docs/logo.png">
</p>

## 介绍
    个人博客项目, koa + vue + webpack + mysql, 持续更新中...
>


## 目录结构

```bash
├── server
│   └── router
│   └──── index.js                  #路由管理
│   └── views
│   └──── index.ejs                 #模版入口
│   └── app.js                      #入口文件
├── static
│   └── build                       # 打包配置目录
│   └──── babel.config.js           #模版入口
│   └──── webpack.base.config.js    #模版入口
│   └──── webpack.dev.config.js     #模版入口
│   └──── webpack.prod.config.js    #模版入口
│   └── output                      # 打包资源目录
│   └── src                         # 项目文件
│   └──── view                      #静态资源管理
│   └──── index.js                  #静态资源入口
├── config.js                       # 数据库连接配置
├── package.json                    # package.json
└── README.md                       # README.md
```


## 开发环境

```
安装依赖    cnpm install

运行项目    npm run dev
```

## 生产环境

```
安装依赖    cnpm install

运行项目    npm run start
```