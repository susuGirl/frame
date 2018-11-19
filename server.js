
import Koa from 'koa'
import React from 'react'
import { renderToString } from 'react-dom/server'
import views from 'koa-views'
import path from 'path'
const router = require('koa-router')();  //注意：引入的方式
import App from './src/views/App'
// import First from './src/views/First'
// import Second from './src/views/Second'

const app = new Koa();

// 将dist文件夹设置为静态路径
app.use(require('koa-static')(__dirname + '/dist'))
// 将ejs设置为我们的模板引擎
app.use(views(path.resolve(__dirname + '/dist'), { map: { html: 'ejs' } }))
// app.use(views(__dirname, {
//   extension: 'ejs'
// }))

app.use(async ctx => {
  let str = renderToString(<App></App>)
  await ctx.render('index', {
    root: str
  })
})
// router.get('/',(ctx,next)=>{
//   // ctx.body=renderToString(<App><First/></App>)
//   let str = renderToString(<App><First/></App>)
//   ctx.render('index', {
//     root: str
//   })
// });
// router.get('/second',(ctx,next)=>{
//   ctx.body=renderToString(<App><Second/></App>)
// });


app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); // router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
// app.listen(8080,()=>{
//   console.log("running at port 8080 ...");
// });
const port = '5200';
// app.set('port', port);

app.listen(port, () => {
  console.log('listen on:' + port);
});