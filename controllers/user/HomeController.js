const Book = require("../../models/Book");
const getBooks = async (req, res) => {
  try {
    let totalBooks = await Book.countDocuments({});
    let books = await Book.find({
      bookTittle: new RegExp(req.query.searchBook, "i"),
    })
      .skip((req.query.pageNo - 1) * req.query.booksPerPage)
      .limit(req.query.booksPerPage);
    res.status(200).send({ data: books });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};
const getBookForUser = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findOne({ _id: id });
    console.log(book);
    res.status(200).send({ data: book });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "something went wrong" });
  }
};

module.exports = { getBooks, getBookForUser };
