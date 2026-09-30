const User = require("../models/User");
const bcrypt = require("bcrypt");
const doAdminLogin = async (req, res) => {
  try {
    let email = req.body.email;
    let user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).send({ message: "invalid user/password" });
    } else {
      let validPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      );
      if (!validPassword) {
        res.status(400).send({ message: "invalid user/password" });
      } else {
        user.lastLogin = new Date();
        await user.save();
        res
          .status(200)
          .send({ message: "login successfully", data: user, success: true });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({userType:'user'})
        //console.log(users)
        res.status(200).send({data:users})
    } catch(err) {
        console.log(err)
        res.status(400).send({message:"user not found"})
    }
};

module.exports = {
  doAdminLogin,
  getUsers
};
