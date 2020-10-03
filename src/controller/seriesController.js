
const series = require ("../model/series.json")

const getAll = (req, res) => {
    console.log(req.url)

    res.status(200).send(books)
}

const getById = (req, res) => {
    const id = req.params.id

    const serieFiltrada = series.find((series) => series.id == id)

    res.status(200).send(serieFiltrada)
}

module.exports = { getAll, getById }