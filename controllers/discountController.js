const Books = require('../models/Book');
const Discount = require('../models/Discount')
const getBookForDiscount = async (req, res) => {
    try {
        let books = await Books.find({}, { _id: 1, bookTittle: 1 });
        res.status(200).send({ success: true, data: books });
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err });
    }
}

const addDiscount = async (req, res) => {
    try {
        let discount = new Discount(req.body);
        await discount.save();
        res.status(200).send({ success: true });

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: 'something went wrong' });

    }
}
const getDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.find({}).populate('book')
        console.log(discounts)
        res.status(200).send({ success: true, data: discounts });

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: 'something went wrong' });

    }
}

const getDiscountForEdit = async (req, res) => {
    try {
        const id = req.params.id;
        const discount = await Discount.findOne({ _id: id });
        const books = await Books.find({});
        res.status(200).send({ success: true, data: discount, books: books })
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'something went wrong' });

    }
}

const editDiscount = async (req, res) => {
    try {
        const id = req.params.id;
        await Discount.updateOne({ _id: id },req.body)
        res.status(200).send({ success: true })

    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'something went wrong' });

    }
}
module.exports = {
    getBookForDiscount,
    addDiscount,
    getDiscounts,
    getDiscountForEdit,
    editDiscount
}