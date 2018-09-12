const express = require('express')
const app = express()

const indent = n => {
	return new Array(n).join('&nbsp;')
}

const mid1 = () => {
	return (req, res, next) => {
		res.body = `<h3>request => first midleware</h3>`
		next()
		res.body += `<h3>response <= first midleware</h3>`
	}
}

const mid2 = () => {
	return (req, res, next) => {
		res.body += `<h3>${indent(4)}request => second midleware</h3>`
		next()
		res.body += `<h3>${indent(4)}response <= second midleware</h3>`
	}
}

const mid3 = () => {
	return (req, res, next) => {
		res.body += `<h3>${indent(8)}request => third midleware</h3>`
		next()
		res.body += `<h3>${indent(8)}response <= third midleware</h3>`
	}
}

app.use(mid1())
app.use(mid2())
app.use(mid3())
app.get('/', (req, res, next) => {
	res.send(`${res.body}<p style="color:#f00">${indent(12)}Koa heart</p>`)
})

app.listen(2334)
