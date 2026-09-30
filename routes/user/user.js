const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user/userController");
router.post("/create/user", (req, res) => {
  userController.addUser(req, res);
});
router.post("/user/login", (req, res) => {
  userController.doUserLogin(req, res);
});
module.exports = router;
