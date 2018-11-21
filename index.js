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