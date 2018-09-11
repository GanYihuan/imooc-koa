const Koa = require('koa')
// 计算执行时间等日志
const logger = require('koa-logger')
const app = new Koa()

const mid1 = async (ctx, next) => {
	ctx.body = 'hello'
	// 交出控制权
	await next()
	ctx.body = ctx.body + ' there'
}

const mid2 = async (ctx, next) => {
	ctx.type = 'text/html; charset=utf-8'
	await next()
}

const mid3 = async (ctx, next) => {
	ctx.body = ctx.body + ' luke'
	await next()
}

app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)
// hello(mid1) => type(mid2) => body(mid3) => body(mid1)
// hello luke there

// app.use(async (ctx, next) => {
// 	console.log(ctx.href)
// 	console.log(ctx.path)
// 	console.log(ctx.url)
// 	console.log(ctx.method)
// 	ctx.body = 'hello koa'
// 	ctx.type = 'text/html; charset=utf-8'
// })

app.listen(2333)
