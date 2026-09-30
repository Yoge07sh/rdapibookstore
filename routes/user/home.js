const express = require("express");
const bodyParser = require("body-parser");
const route = express.Router();
route.use(bodyParser.json());
route.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
const HomeController = require("../../controllers/user/HomeController");
route.get("/user/books", (req, res) => {
  HomeController.getBooks(req, res);
});

route.get("/user/book/:id", (req, res) => {
  HomeController.getBookForUser(req, res);
});
module.exports = route;
