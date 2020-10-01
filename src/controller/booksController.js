
const books = require ("../model/books.json")

const getAll = (req, res) => {
    console.log(req.url)

    res.status(200).send(books)
}

module.exports= { getAll }