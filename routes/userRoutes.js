const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");
route.use(bodyParser.json());
route.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
route.post("/admin/login", (req, res) => {
  userController.doAdminLogin(req, res);
});

route.get("/users", (req, res) => {
  userController.getUsers(req, res);
});

module.exports = route;
