const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");

router.post("/registerProduct", ProductController.RegisterProduct);
router.get("/listProduct/:name?", ProductController.ListProduct);

module.exports = router;
