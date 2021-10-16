const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const Coin = require("./models/coins");
const axios = require('axios');
app.use(express.urlencoded({extended:true}));


// redirecting to routes
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
 