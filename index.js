const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const Coin = require("./models/coins");
const axios = require('axios');
app.use(express.urlencoded({extended:true}));


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})


async function sendToDb(req,res) {
    try {
      const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
      let fetchedData = response.data;
      let stringData = JSON.stringify(fetchedData);
      const pushData = await Coin.findByIdAndUpdate({_id:'616b0149a325c444ea4e1e2a'},{allcoins:stringData});
      return fetchedData;
    } catch (error) {
      console.error(error);
    }
  }


  async function getFromDb(req,res) {
    try {
      
      const pushData = await Coin.find({});
      return pushData;
    } catch (error) {
      console.error(error);
    }
  }

app.get('/fetch', async function(req,res){
    sendToDb();
    const data = await getFromDb();
    const myJSON = JSON.stringify(data);
    const myArr = myJSON.split("}");
    let firstTen = [];
    for(let i=0;i<10;i++){
      myArr[i].replace(/\/$/, '');
      
      firstTen.push(myArr[i]);
    }

   res.send(firstTen);
});


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
 