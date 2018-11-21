# Webpack4+React+KOA2+PM2 SSR项目纯手工架子搭建
* 本人全职喵姐，兼职程序员，才疏学浅，大神如果有好的idea能指点迷津的话感激不尽
* 以下项目为纯手工搭建的Webpack4+React+KOA2+PM2前端豆腐渣工程，房子的简陋模型，入门教程以及流程指引
* 后续要精装修还是盖茅草屋看你自己了……/微微笑（自带表情包）……先学习…...
# Let's begin!
## Webpack
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/1.png)
  * devDependencies 用于开发环境，生产环境不会被打入包内
  * dependencies 用于生产环境，此处依赖的包开发和生产环境都能用
  * 通过NODE_ENV=developement或NODE_ENV=production指定开发还是生产环境
  * 所以安装模块的时候，—save会安装到生产环境，—save-dev会安装到开发环境
* 下载安装webpack
  * sudo npm install webpack webpack-cli webpack-dev-server -g
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/2.png)
* 创建文件夹：touch dist/index.html src/index.js
  * 生成的文件目录
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/3.png)
* 打个包试试看
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/4.png)
  * 打包成功，生成了打包后的main.js文件（默认打包的 src/index.js 文件）
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/5.png)
  * 打包黄色警告：
    * mode是webpack中独有的，有两种打包环境，一个是开发环境：development另外一个是生产环境：production
    * 打包的时候输入webpack --mode=development或者webpack --mode=production就不会出现警告提示了
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/6.png)
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/7.png)
* 开始自己简单配置 webpack
  * touch config/webpack.dev.js
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/8.png)
* 删除文件，清理目录：rm dist/main.js src/index.js
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/9.png)
* 创建入口文件：touch src/main.js
* 打包执行 webpack --mode=“development 报错
  * webpack4打包默认找的src下面的index.js入口，我们前面已经删除了，这里src下面是main.js文件，所以找不到
  * 配置 config/webpack.dev.js文件
    * 需要设置多个入口文件时：touch src/main2.js
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/10.png)
  * 配置 package.json 文件："build": "webpack --config=config/webpack.dev.js"
  * 然后执行 npm run build
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/11.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/12.png)
* webpack-dev-server 热更新配置，修改代码保存时浏览器实时更新页面
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/13.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/14.png)
* 分离开发环境和生产环境的配置
  * npm install webpack-merge -D  // 安装依赖：webpack-merge@4.1.4
  * 创建文件：touch config/webpack.base.js config/webpack.prod.js 如图配置
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/15.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/16.png)
* 因为html页面需要引入打包后的js文件，但是我们打包输出的文件一般会加上哈希值什么的，所以需要自动化生成 HTML 页面，自动引入打包后的文件
  * 引入依赖：npm i --save-dev html-webpack-plugin
  * 创建文件：touch src/index.html
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/17.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/18.png)
* babel ：ES5转ES6 注意版本，版本不对报一些乱七八糟的玩意儿尤其是core这熊孩子
  * 然后告诉一些跟我一样无聊的人，像我一样在项目里用了ES6语法然后想看看不装babel能不能解析的，我告诉你goole浏览器是可以解析的/翻白眼，goole是对开发者最友好的浏览器，但是别人用的浏览器五花八门多了去了版本高低不齐，满足一下好奇心就可以了该装的还是要装的，总要兼容一下岁数大了的浏览器四不四
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/19.png)
## React
* 现在开始 React 项目：磨刀霍霍开始进入正题，别问我为什么webpack介么简陋，我只需要它现在能跑的动就行了，至于找你跑，效率问题后续再搞（劳资说什么你都要反驳，你个杠精/呼你一巴掌）
* npm i -S react react-dom
  * react-dom@16.6.3
  * react@16.6.3
* npm i react-router-dom -S
  * react-router-dom@4.3.1
* 创建文件：根据配图配置内容
  * mkdir src/router src/views
  * mkdir src/views/App
  * touch src/router/index.js src/views/App/index.js
  * mkdir src/views/First src/views/Second src/views/Third
  * touch src/views/First/index.js src/views/Second/index.js src/views/Third/index.js
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/20.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/21.png)
  * 然后服务跑起来，没毛病，页面正常显示正常跳转，but 少年你还是太年轻了，你以为这是脚手架吗？什么事都帮你干好了？现在，请刷新你的页面：首页没问题？那换其他页面刷新试试看
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/22.png)
  * So surprise 四不四？因为以前用的脚手架刷新页面不会404是因为他们很贴心的本地都帮你配好node服务了。现在为什么本地刷新404了呢？因为这是单页面SPA应用啊，而且是极简版/哭笑不得
  * 原因：单页面应用只有一个真实路由，这里顺便涉及到ssr服务端渲染的问题了
### SSR强行解释一波
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/23.png)
* 单页面应用不管是组件的hash模式还是真实路由模式，其实都是先加载入口，再往入口的坑里填相应的组件
* 所以不管是加载 /a 还是 /#/b  都会先加载 / ，也就是先加载前面那段真实路由，即入口文件
* 但是如果你不是先进的 / ，后进 /a 或 /b，而是越过了 / ，直接在页面加载 /a ，因为跳过了入口，所以会导致页面 404
* 因为单页面应用，其实都是虚拟路由，不是真正的路由。
* 因此，我们需要再配置服务端的真实路由，让用户直接访问 /a 时也能正常访问页面
* 真实路由和虚拟路由相结合，如果是从入口一步一步往下走的就走虚拟路由的配置，如果是跳过入口直接访问的页面，就会走真实路由的配置。虚拟路由提高页面的响应速度，真实路由有利于SEO
* [Vue SSR 官网了解一下，讲的挺清楚的](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)
  * 服务器需要做好处理 URL 的准备。处理应用启动最初的 / 这样的请求应该没问题，但当用户来回跳转并在 /accounts/123 刷新时，服务器就会收到来自 /accounts/123 的请求，这时你需要处理这个 URL 并在响应中包含 JavaScript 应用代码
* 解释完毕，下面就选方案吧，express还是nginx呢？OH NO，我选KOA2，就是这么任性
* nginx反向代理能处理路由问题，但是他只能把路由重新指过去能做的操作比较局限，而且偏恶心，谁让人家是兼职的呢，但是全职处理ssr问题的express和koa，可扩展性比较高能干很多事情。但是koa2是express的原班人马打造的升级版，那对于走在技术前沿的我们肯定选升级版的装备四不四？！！！
## KOA2 pm2
* KOA2淌坑走起：超简易版，我是网上是在是查不到我想要的资料，所以只能自己慢慢怼了，万分期待有大神为我讲解KOA2用法的豪华版
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/24.png)
* 为什么 index.js 文件只有三行代码只是引入serve.js文件？因为我们server.js文件里使用了import引入包的方式，起node服务的入口文件不能含有这些，所以只能用index.js包一层
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/25.png)
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/26.png)
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/27.png)
* 配置完以上内容豆腐渣工程就建好啦，本地跑 node index.js 没问题，刷新页面也不会404了
* 现在需要进行打包，以及将项目放在服务器上跑
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/28.png)
* npm run build 打包出错？？？what？？？因为那些模块都被打包编译了，而且我们需要告诉webpack，你现在打包的是web环境还是node环境，用 target 指定
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/29.png)
* 安装依赖：npm install webpack-node-externals --save-dev
  * 防止将某些 import 的包被打包，而是在运行时再去外部获取这些扩展依赖
* 创建文件：touch config/webpack.server.js
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/30.png)
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/31.png)
* ![image](https://github.com/susuGirl/frame/blob/master/src/img/32.png)
* 现在执行命令：
  * node index.js
  * node dist/index.js
  * pm2 start index.js（事先全局安装pm2即可：npm install -g pm2）
  * pm2 start dist/index.js
  * 都运行成功，并且实现首屏加载，也就是说，现在你的项目可以部署到服务器去跑了
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/33.png)
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/34.png)
## 配置服务器环境
* 下载nvm：wget https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
  * 自动生成 install.sh 文件
  * ![image](https://github.com/susuGirl/frame/blob/master/src/img/35.png)
  * source ./install.sh
  * 查看nvm是否安装成功：nvm --version
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/36.png)
  * 用nvm下载 nodeJs
    * 报错：nvm_has: command not found
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/37.png)
    * 执行命令：source ~/.profile
    * 然后：nvm install v8.11.3 再根据下图查看以及安装pm2
    * ![image](https://github.com/susuGirl/frame/blob/master/src/img/38.png)
  * 然后把你的项目放到服务器上，配置好反向代理，比如 nginx
  * 然后用pm2跑起来就可以了
  * 以上房子模型搭好了，后面就可以打地基和装修了，但你可以选择给这豆腐渣工程加上钢筋水泥来练手，毕竟现在网上脚手架辣么多，很多时候其实不需要我们纯手工去搭建一个项目。但是我觉得吧，我们不能总是用别人的工具是吧，天天踩别人的坑，我们也得自己去知道这些工具怎么来的，这些坑怎么造成的，然后就可以全力开发一款属于自己的脚手架偷偷埋一些不易发现的小坑，骗别人来踩/兴奋
### 喜欢的话留个足迹star一下吧，微信公众号：fuxiaodexing，博客：[全端菜鸟小姐](https://blog.csdn.net/weixin_41845146)
#### [进入该项目的博客详解](https://blog.csdn.net/weixin_41845146/article/details/84324057)