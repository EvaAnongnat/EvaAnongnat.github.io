
const mongoose = require('mongoose');
const app = require("../api/index");
const PORT = process.env.PORT || 4000;
const config = require('./src/config-example');
const boot = async () => {
  // Connect to mongodb
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(PORT, () => {
    console.log('Server is running');
  });
};

boot();
module.exports = app;