const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();
const DiscountController = require('../controllers/discountController');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}))

route.get('/books/for/discount', (req, res) => {
    DiscountController.getBookForDiscount(req, res);
})
route.get('/discounts', (req, res) => {
    DiscountController.getDiscounts(req, res);
})

route.post('/add/discount', (req, res) => {
    DiscountController.addDiscount(req, res);
})

route.get("/discount/for/edit/:id", (req, res) => {
    DiscountController.getDiscountForEdit(req, res)
})

route.put('/edit/discount/:id', (req, res) => {
    DiscountController.editDiscount(req, res)
})

module.exports = route; 