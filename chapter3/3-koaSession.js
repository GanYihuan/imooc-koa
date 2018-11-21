const Koa = require('koa')
const logger = require('koa-logger') // 计算执行时间等日志
const session = require('koa-session') // 用户识别, 本地持久化
const app = new Koa()

app.keys = ['Hi luke']

app.use(logger())
app.use(session(app))

// 路由识别
app.use(ctx => {
  if (ctx.path === '/') {
    let n = ctx.session.views || 0
    ctx.session.views = ++n
    ctx.body = n + ' 次'
  } else if (ctx.path === '/hi') {
    ctx.body = 'hi luke'
  } else {
    ctx.body = '404'
  }
})

app.listen(2333)
