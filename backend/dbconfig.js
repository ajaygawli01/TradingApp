

const mongoose = require("mongoose");
require("dotenv").config();

// const uri = 'mongodb+srv://susalabs:susalabs@cluster0.xn0yck9.mongodb.net/?retryWrites=true&w=majority';
const uri =
  "mongodb+srv://susalabs:susalabs@cluster0.xn0yck9.mongodb.net/tradingapp?retryWrites=true&w=majority";

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// connectToDatabase();
