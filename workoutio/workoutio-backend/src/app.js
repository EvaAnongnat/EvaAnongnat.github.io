const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');


const app = express();




// Body parser to parse json in request body for us
app.use(bodyParser.json());
// CORS
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(async (req, res, next) => {
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  return next();
});
// app.use('/users', userRouter);


// app.get('/', (req, res) =>  {
//   res.send("Server is running");
// })




// const boot = async () => {
//   // Connect to mongoDB
//   await mongoose.connect(config.mongoUri, config.mongoOptions);
//   // Start express server
//   app.listen(config.port, () => {
//     console.log(`Server listening on port ${config.port}`);
//   });
// };

// boot();
module.exports = app;