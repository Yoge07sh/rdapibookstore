const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();
const uploader = require('../middleware/uploadMiddleware')
const BookController = require('../controllers/bookController');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}))
route.get('/books', (req, res) => {
    BookController.getBooks(req, res);
})
route.get('/book/:id', (req, res) => {
    BookController.getBookById(req, res);
})
route.post('/add/book', uploader.single("file"), (req, res) => {
    BookController.addBook(req, res);
})
route.delete('/delete/book/:id', (req, res) => {
    BookController.deleteBook(req, res);
})

route.get('/book/for/edit/:id', (req, res) => {
    BookController.getBookForEdit(req, res);
})


route.put('/edit/book/:id', (req, res) => {
    BookController.editBook(req, res);
})

module.exports = route;