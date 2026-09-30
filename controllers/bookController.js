const Book = require('../models/Book');
const cloudinary = require('../config/cloudinary');
const addBook = async (req, res) => {
    try {

        const upload = await cloudinary.uploader.upload(req.file.path);
        req.body.bookImage = upload.secure_url;
        let book = new Book(req.body);
        await book.save();
        console.log('data saved successfully');
        res.status(200).send({
            message: 'data saved successfully'
        });
    } catch (err) {
        res.status(400).send({ message: 'somenthing went wrong' });
    }
}

const getBooks = async (req, res) => {
    try {
        let totalBooks = await Book.countDocuments({});
        let books = await Book.find({ bookTittle: new RegExp(req.query.searchBook, 'i') }).skip((req.query.pageNo - 1) * (req.query.booksPerPage)).limit(req.query.booksPerPage);
        res.status(200).send({ data: books, totalBooks: totalBooks })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err });

    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findOne({ _id: id });
        res.status(200).send({ data: book });
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err });
    }
}

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        await Book.deleteOne({ _id: id });
        res.status(200).send(
            { success: true }
        )

    } catch (err) {
        console.log(err);
        res.status(400).send(
            { success: false }
        );
    }
}

const getBookForEdit = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        let book = await Book.findOne({ _id: id });
        console.log(book);
        res.status(200).send({ data: book, })

    } catch (err) {
        console.log(err);
        res.status(400).send(
            { data: err }
        );
    }
}

const editBook = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await Book.updateOne({ _id: id }, req.body);
        res.status(200).send({ success: true });

    } catch (err) {
        console.log(err);
        res.status(400).send(
            { success: false }
        );
    }
}



module.exports = {
    addBook,
    getBooks,
    getBookById,
    deleteBook,
    getBookForEdit,
    editBook,
    
}