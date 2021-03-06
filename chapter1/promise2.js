const util = require('util')
const fs = require('fs')
// package callback func api
const readAsync = util.promisify(fs.readFile)

/**
 * sync complete async act
 */
async function init() {
  try {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
  } catch (err) {
    console.log(err)
  }
}

init()
