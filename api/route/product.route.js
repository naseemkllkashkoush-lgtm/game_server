const express = require("express");
const { createProduct, findAllProduct } = require("../controllers/product.controller");

const productRout = express.Router();

productRout.post("/createproduct", createProduct)
productRout.post("/findAllProduct", findAllProduct)


module.exports = productRout;