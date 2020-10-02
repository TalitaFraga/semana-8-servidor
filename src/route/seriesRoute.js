const express = require('express')

const route = express.Router()

const controller = require('../controller/seriesController')

route.get('/series', controller.getAll)

module.exports = route