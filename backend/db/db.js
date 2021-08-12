const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error Connection with MongoDB: ", e);
    throw new Error("Error Connection with MongoDB");
  }
};
module.exports = { dbConnection };
