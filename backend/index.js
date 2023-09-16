const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 5000;

mongoose.connect(
    process.env.MONGO_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((val) => {
    console.log('Connected to Mongo!');
}).catch((err) => {
    console.log(err.message);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('App is running on port ' + port);
});