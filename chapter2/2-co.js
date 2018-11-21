const co = require('co')
// request async data
const fetch = require('node-fetch')

/**
 * co princeple
 */
function run(generator) {
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value
  promise.then(data => {
    const it2 = iterator.next(data)
    const promise2 = it2.value
    promise2.then(data2 => {
      iterator.next(data2)
    })
  })
}
run(function* () {
  // yield: process stop, return current status, sync complete async act
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary
  console.log('summary', summary)
})

/**
 * can't call string, boolean
 */
co(function* () {
  // yield: process stop, return current status, sync complete async act
  // fetch(): fetching a resource from the network
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary
  console.log('summary', summary)
})
