# myapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# PWA 引入

require  sw-precache-webpack-plugin 模块

编译 service worker 文件 插入 项目中

This is a webpack plugin for using service workers to cache your external project dependencies. It will generate a service worker file using sw-precache and add it to your build directory.

new SWPrecacheWebpackPlugin({
  cacheId: 'my-vue-app',
  filename: 'service-worker.js',
  staticFileGlobs: ['dist/**/*.{js,html,css}'],
  minify: true,
  stripPrefix: 'dist/'
})

详解 SWPreacheWebpackPlugin 中参数


新增
  
  load-minifiled 文件 压缩 service-worker js 文件
  service-worker-dev    文件 开发环境使用文件 并在 htmlwebpackplugin 插件中配置 serviceWorkerLoader 属性, 
  service-worker-prod    文件 开发环境使用文件 并在 htmlwebpackplugin 插件中配置 serviceWorkerLoader 属性, 

在 html 文件中 引入 <%= htmlWebpackPlugin.options.serviceWorkerLoader %> 在编译时引入文件


利用  serviceWorkerLoader 

https://www.npmjs.com/package/sw-precache-webpack-plugin