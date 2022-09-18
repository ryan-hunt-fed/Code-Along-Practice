const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
    res.sendFile(path.resolve('server/public/index.html'))
  })

module.exports = server
