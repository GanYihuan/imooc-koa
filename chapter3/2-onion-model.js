const Koa = require('koa')
const app = new Koa()

const mid1 = async (ctx, next) => {
  ctx.body = 'hello'
  // 交出控制权, 执行下一个中间件
  await next()
  ctx.body = ctx.body + ' hi'
}

const mid2 = async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  await next()
}

const mid3 = async (ctx, next) => {
  ctx.body = ctx.body + ' World'
  await next()
}

app.use(mid1)
app.use(mid2)
app.use(mid3)
// (mid1)hello => (mid2)type => (mid3)world => (mid2) => (mdi1)hi
// hello world hi

app.listen(2333)
