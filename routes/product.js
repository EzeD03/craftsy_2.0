var express = require('express');
var router = express.Router();

const { detail } = require("../controllers/productController")

router
    .get("/detail", detail)
module.exports = router;