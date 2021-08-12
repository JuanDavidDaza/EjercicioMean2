const Venta = require("../models/venta");
const Product = require("../models/product");
const User = require("../models/user");

const RegisterVenta = async (req, res) => {
  if (!req.body.nombreproducto || !req.body.nombreusuario || !req.body.precio)
    return res.status(401).send("Process failed: Incomplete data");

  const product = await Product.findOne({ name: req.body.nombreproducto });
  if (!product)
    return res.status(401).send("Process failed: Product not already exist");

  let user = await User.findOne({ name: req.body.nombreusuario });
  if (!user) return res.status(400).send("Process failed: user not exist");

  const venta = new Venta({
    idproduct: product._id,
    iduser: user._id,
    precio: req.body.precio,
    dbStatus: true,
  });

  const result = await venta.save();
  if (!result) return res.status(401).send("Failed to register sale");
  return res.status(200).send({ venta });
};

const ListVenta = async (req, res) => {
 
  let venta = await Venta.find()
    .populate("idproduct")
    .populate("iduser")
    .exec();
  if (!venta || venta.length === 0)
    return res.status(400).send("Failed: No ventas");
  return res.status(200).send({ venta });
};

module.exports = { RegisterVenta, ListVenta };
