const express = require('express')

const route = express.Router()

const controller = require('../controller/seriesController')

route.get('/series', controller.getAll)
route.get('/series/:id', controller.getById)

module.exports = route