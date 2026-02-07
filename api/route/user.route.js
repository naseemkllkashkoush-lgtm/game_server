const express = require("express");
const { createuser, login, UpdateUser } = require("../controllers/user.controller");

const userRout = express.Router();

userRout.post("/createUser", createuser)
userRout.post("/login", login)
userRout.post("/UpdateUser",UpdateUser )
module.exports = userRout;




