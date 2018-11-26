const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  // console.log(ctx)
  console.log(ctx.href)
  console.log(ctx.path)
  console.log(ctx.url)
  console.log(ctx.method)
  ctx.type = 'text/html; charset=utf-8'
  ctx.body = 'hello koa'
})

app.listen(2333)
