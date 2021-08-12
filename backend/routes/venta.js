const express = require("express");
const router= express.Router();
const VentaController= require("../controllers/venta");

router.post("/registerVenta", VentaController.RegisterVenta);
router.get("/listVenta/:name?", VentaController.ListVenta);

module.exports=router;

