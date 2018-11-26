/**
 * step1, callback func
 */
const fs = require('fs')

function readFile(cb) {
  fs.readFile('./package.json', (err, data) => {
    if (err) {
      return cb(err)
    }
    cb(null, data)
  })
}

readFile((err, data) => {
  if (!err) {
    data = JSON.parse(data)
    console.log(data.name)
  }
})

/**
 * step2, Promise
 */
const fs = require('fs')

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

readFileAsync('./package.json')
  .then(data => {
    data = JSON.parse(data)
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })

/**
 * step3, co + Generator func + Promise
 */
const co = require('co')
const fs = require('fs')
const util = require('util')

co(function*() {
  let data = yield util.promisify(fs.readFile)('./package.json')
  data = JSON.parse(data)
  console.log(data.name)
})

/**
 * step4, Async
 */
const fs = require('fs')
const util = require('util')
const readAsync = util.promisify(fs.readFile)

async function init() {
  let data = await readAsync('./package.json')
  data = JSON.parse(data)
  console.log(data.name)
}

init()
