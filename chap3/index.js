const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	ctx.body = 'hello koa'
})

app.listen(2333)
