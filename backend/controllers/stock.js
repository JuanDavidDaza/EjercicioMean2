const Stock = require("../models/stock");

const RegisterStock = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.cantidad ||
    !req.body.fecha ||
    !req.body.bodega
  )
    return res.status(400).send("Failed: Incomplete data");

  const existingStock = await Stock.findOne({ name: req.body.name });
  if (existingStock)
    return res.status(401).send("Process failed: Stock already exist");

  let stock = new Stock({
    name: req.body.name,
    cantidad: req.body.cantidad,
    fecha: req.body.fecha,
    bodega: req.body.bodega,
    dbStatus: true,
  });
  const result = await stock.save();
  if (!result) return res.status(401).send("Failed to register stock");
  return res.status(200).send({ stock });
};

const ListStock = async (req, res) => {
  let stock = await Stock.find()
  if (!stock || stock.length === 0)
    return res.status(400).send("Failed: No stocks");
  return res.status(200).send({ stock });
};

module.exports = { RegisterStock, ListStock };
