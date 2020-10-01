const express = require('express')
const app = express()

const books = require('./route/booksRoute')

app.use('/', books)

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})


module.exports = app