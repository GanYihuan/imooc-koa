const Koa = require('koa')
// 计算执行时间等日志
const logger = require('koa-logger')
// 用户识别, 本地持久化
const session = require('koa-session')
const app = new Koa()

app.keys = ['Hi luke']

app.use(logger())
app.use(session(app))
// app.use(ctx => {
// 	if (ctx.path === '/favicon.ico') return
// 	let n = ctx.session.views || 0
// 	ctx.session.views = ++n
// 	ctx.body = n + ' views'
// })
// 路由识别
app.use(ctx => {
	if (ctx.path === '/') {
		let n = ctx.session.views || 0
		ctx.session.views = ++n
		ctx.body = n + ' 次'
	} else if (ctx.path === '/hello') {
		ctx.body = 'Hello luke'
	} else {
		ctx.body = '404'
	}
})

app.listen(2333)
