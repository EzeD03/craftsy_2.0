var express = require('express');
var router = express.Router();

const { login, register, profile } = require("../controllers/usersController")

/* GET users listing. */
router
  .get('/login', login)
  .get("/register", register)
  .get("/profile", profile)
module.exports = router;