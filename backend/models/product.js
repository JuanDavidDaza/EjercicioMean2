const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  precio: Number,
  codigo: String,
  descripcion: String,
  fecha: Date,
  date: { type: Date, default: Date.now },
  idStock: { type: mongoose.Schema.ObjectId, ref: "stock" },
  dbStatus: Boolean,
  
});

const product=mongoose.model("product", productSchema);

module.exports = product;

