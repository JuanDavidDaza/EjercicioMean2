const mongoose = require("mongoose");

const stockSchema= mongoose.Schema({
    name:String,
    cantidad:Number,
    fecha:Date,
    bodega: String,
    dbStatus:Boolean,
    date:{type:Date, default:Date.now},
})

const stock = mongoose.model("stock", stockSchema);

module.exports=stock;