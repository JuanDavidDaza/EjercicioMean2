const express = require("express");
const router = express.Router();
const StockController = require("../controllers/stock");

router.post("/registerStock", StockController.RegisterStock);
router.get("/listStock", StockController.ListStock);

module.exports = router;
