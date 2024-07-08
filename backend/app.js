const express = require("express");
const app = express()
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
require("dotenv").config();
const mongoose = require("mongoose");
const monogdbconnection = require("./dbconfig")
const userRoutes = require("./Routes/UserRoute")
const stockRoutes= require("./Routes/stockRoute")
const port = process.env.PORT || 5000;

app.use(cors(
//     {
//     origin: `${FRONTEND}`,
//     credentials: true // Allow credentials (cookies, authorization headers) to be sent
//   }
));
  app.use(xss()); // safety against XSS attack or Cross Site Scripting attacks
  app.use(helmet()); // safety against XSS attack
  app.use(express.json({ extended: false }));
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use(bodyparser.json());

  app.get("/", (req, res) => {
    // console.log("hello");
    res.json("working");
  });


  app.use('/api/user', userRoutes);
  app.use('/api/stocks', stockRoutes);
  

  try {
    monogdbconnection.connectToDatabase().then(()=>{
        app.listen(port, () =>
            console.log(`Server is up and running at ${port}`)
          );
    }) .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    
  }
