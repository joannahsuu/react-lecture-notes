// 非同步

// const fs = require('fs')

// // 非同步
// fs.readFile('./file.txt', (err, content)=> {
//   console.log(content)
// })

// // 同步
// const content = fs.readFileSync('./file.txt')

// -----------------------------------------------------------------------

const fs = require('fs')

// 1. callback

const getData = (callback) => {
  fs.readFile('./data.json', (err, content)=> {
    callback(content)
    // return content
  })
}

const start = () => {
  const data = getData((data) => {
    console.log(data)
  })
}

// 2. promise
const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data.json', (err, content)=> {
      if(err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}

const start = () => {
  getData().then(data => {
    console.log(data)
  })
}

// 3. async/await

const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data.json', (err, content)=> {
      if(err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}

const start = async () => {
  const data = await getData()
  console.log(data)
}

start()