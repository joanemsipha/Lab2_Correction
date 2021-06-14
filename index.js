'use strict'
// const path = require('path')
const express = require('express')
const app = express()
const mainRouter = require('./mainRoutes.js')
// mainRouter.get('/', function (req, res) {
// res.send('Hellow World')
// })
/*
app.get('/', function (req, res) {
  res.send('Hello world')
})
This is equivalent to the top function--Although its not tedious */

// mainRouter.get('/about', function (req, res) {
// res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

/*
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})
This is equivalent to the top function--Although its not tedious */

app.use(mainRouter)

const port = process.env.port || 3000
app.listen(port)
console.log('Express server running on port 3000', port)
