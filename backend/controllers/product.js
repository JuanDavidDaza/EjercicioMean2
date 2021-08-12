const Product = require("../models/product");
const Stock = require("../models/stock");

const RegisterProduct = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.nombreStock ||
    !req.body.precio ||
    !req.body.codigo ||
    !req.body.descripcion ||
    !req.body.fecha
  )
    return res.status(401).send("Process failed: Incomplete data");

  const existingProduct = await Product.findOne({ name: req.body.name });
  if (existingProduct)
    return res.status(401).send("Process failed: Product already exist");

    let stock = await Stock.findOne({ name: req.body.nombreStock });
  if (!stock)
    return res.status(400).send("Process failed: Stock not exist");

    const product = new Product({
      name: req.body.name,
      precio: req.body.precio,
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
      idStock:stock._id,
      dbStatus: true,
    });

    const result = await product.save();
    if (!result) return res.status(401).send("Failed to register Product");
    return res.status(200).send({ product });
};

const ListProduct = async (req, res) => {
  let product = await Product.find({
    name: new RegExp(req.params["name"], "i"),
  })
    .populate("idStock")
    .exec()

  if (!product || product.length === 0) return res.status(401).send("No product");
  return res.status(200).send({ product });
};

module.exports = { RegisterProduct, ListProduct };
