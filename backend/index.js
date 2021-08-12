const express= require("express");
const cors = require("cors");
const {dbConnection}= require("./db/db");
const Product= require("./routes/product");
const User= require("./routes/user");
const Venta= require("./routes/venta");
const Stock= require("./routes/stock");


require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/product", Product);
app.use("/api/user", User);
app.use("/api/venta", Venta);
app.use("/api/stock", Stock);

app.listen(process.env.PORT, ()=>{
    console.log("Backend server running OK, on port: ", process.env.PORT);
})
dbConnection();
