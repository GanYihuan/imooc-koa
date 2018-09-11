const koa = require('koa')
const app = new koa()
const logger = require('koa-logger')
const convert = require('koa-convert')
const indent = n => {
	return new Array(n).join('&nbsp;')
}

// 简写两次 async 语法
// const mid1 () => async(ctx, next) => {
//   ctx.body = `<h3>request => first midleware</h3>`
// 		await next()
// 		ctx.body += `<h3>response <= first midleware</h3>`
// }
const mid1 = () => {
	return async (ctx, next) => {
		ctx.body = `<h3>request => first midleware</h3>`
		await next()
		ctx.body += `<h3>response <= first midleware</h3>`
	}
}

const mid2 = () => {
	return async (ctx, next) => {
		ctx.body += `<h3>${indent(4)}request => second midleware</h3>`
		await next()
		ctx.body += `<h3>${indent(4)}response <= second midleware</h3>`
	}
}

const mid3 = () => {
	return async (ctx, next) => {
		ctx.body += `<h3>${indent(8)}request => third midleware</h3>`
		await next()
		ctx.body += `<h3>${indent(8)}response <= third midleware</h3>`
	}
}

// koa1 需要兼容, koa-convert 实现
// app.use(convert(logger()))
app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use(async (ctx, next) => {
	ctx.body += `<p style="color:#f00">${indent(12)}Koa heart</p>`
})

app.listen(2333)
