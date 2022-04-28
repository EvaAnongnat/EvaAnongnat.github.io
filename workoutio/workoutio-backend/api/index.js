const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();
const config = require("../src/config");

const app = express();
const PORT = config.port;

// const recordRouter = require("./routes/records");
const route = require("../src/routes/user");


// if (config.isVercel) {
if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/users", route);
app.get('/', (req, res) =>  {
    res.send("Server running");
  })
module.exports = app;