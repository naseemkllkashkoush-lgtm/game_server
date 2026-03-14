const express = require("express");
const { createProduct, findAllProduct, deleteProduct } = require("../controllers/product.controller");

const productRout = express.Router();

productRout.post("/createproduct", createProduct)
productRout.post("/findAllProduct", findAllProduct)
productRout.delete("/deleteProduct", deleteProduct)

module.exports = productRout;