const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://<dbusername>:<password>@cluster0.rcb0h32.mongodb.net/dbname?retryWrites=true&w=majority");
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;
