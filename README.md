# 本地开发node服务

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm run start
```

## 本地模拟数据

1. router文件夹下建当前项目对应的路由文件

    例如
    ```
    demo.js
    ```
2. 在router文件夹下的index.js引入添加的路由文件
3. 通过本地ip即可访问

## 支持跨域

```
    res.header("Access-Control-Allow-Origin", req.headers.origin);
```

###### 注意
    
1. 本项目配置了热部署，如果安装过supervisor可以直接执行 `npm run start` , 否则需要安装[supervisor](https://github.com/petruisfan/node-supervisor)；

```
    npm install -g supervisor
```

2. 如果不配置热部署supervisor，可以修改script中的启动指令

```
    "scripts": {
        "start": "node app.js"
    },
```