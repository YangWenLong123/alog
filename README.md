<p align="center">
  <img width="300" src="http://cdn.wxhand.com/test/koa.png">
</p>

## 介绍
    个人博客项目, koa + vue + webpack + mysql, 持续更新中...
>


## 目录结构

```bash
├── dist
├── public
├── server
│   └── router
│   └──── index.js                  #路由管理
│   └── app.js                      #入口文件
├── config.js                       # 数据库连接配置
├── package.json                    # package.json
└── src                             # vue项目入口
└── browserslistrc                  # 浏览器兼容配置
└── .env.development                # 开发环境配置
└── .gitignore                      # 文件过滤配置
└── .eslintrc.js                    # eslint配置
└── bable.config.js                 # bable配置
└── vue.config.js                   # vue配置
└── package.json                    # package.jsonwen
└── package-lock.json               # package-lock.json
└── README.md                       # README.md
└── .env.production                 # 生产环境配置
```


## 开发环境

```
安装依赖    cnpm install (/alog /alog/server))

运行项目    npm run serve & npm run node
```

## 测试环境

```
打包    npm run build:dev

安装依赖    cnpm install (/alog /alog/server))

运行项目    npm run dev
```

## 生产环境

```
打包    npm run build:prod

安装依赖    cnpm install (/alog /alog/server))

运行项目    npm run start
```