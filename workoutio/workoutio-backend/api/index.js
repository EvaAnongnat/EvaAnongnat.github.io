const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');




const userRouter = require('../src/routes/user');

const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
);

app.use('/users', userRouter);

module.exports = app;