var koa = require('koa')
var app = new koa()
var logger = require('koa-logger')

var indent = function(n) {
	return new Array(n).join('&nbsp;')
}

var mid1 = function() {
	return function*(next) {
		this.body = '<h3>request => first midleware</h3>'
		yield next
		this.body += '<h3>response <= first midleware</h3>'
	}
}

var mid2 = function() {
	return function*(next) {
		this.body += '<h3>' + indent(4) + 'request => second midleware</h3>'
		yield next
		this.body += '<h3>' + indent(4) + 'response <= second midleware</h3>'
	}
}

var mid3 = function() {
	return function*(next) {
		this.body += '<h3>' + indent(8) + 'request => third midleware</h3>'
		yield next
		this.body += '<h3>' + indent(8) + 'response <= third midleware</h3>'
	}
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use(function*(next) {
	this.body += '<p style="color:#f00">' + indent(12) + 'Koa heart</p>'
})

app.listen(2333)
