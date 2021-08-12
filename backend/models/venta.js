const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema({
  idproduct: { type: mongoose.Schema.ObjectId, ref: "product" },
  iduser: { type: mongoose.Schema.ObjectId, ref: "user" },
  precio: Number,
  dbStatus: Boolean,
  date: { type: Date, default: Date.now },
});

const venta= mongoose.model("venta", ventaSchema);

module.exports=venta;