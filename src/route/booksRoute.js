const express = require('express')

const route = express.Router()

const controller = require('../controller/booksController')

route.get('/books', controller.getAll)

module.exports = route