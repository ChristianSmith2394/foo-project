require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'a' },
        { id: 2, username: 'b' },
        { id: 3, username: 'c' },
    ])
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})