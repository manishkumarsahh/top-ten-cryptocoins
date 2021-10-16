const path = require('path');
const Coin = require("../models/coins");
const axios = require('axios');
async function  sendToDb(req,res) {                 //data sent to database
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


  async function getFromDb(req,res) {               //data fetched from database
    try {
      
      const pushData = await Coin.find({});
      return pushData;
    } catch (error) {
      console.error(error);
    }
  }


module.exports.fetch =async function(req, res){
    
    sendToDb();
    const data = await getFromDb();                         //get data from db
    const myJSON = JSON.stringify(data);                    //convert to string
    const myArr = myJSON.split("}");                        // array of string
    let firstTen = [];
    for(let i=0;i<10;i++){
      myArr[i].replace(/\/$/, '');
      
      firstTen.push(myArr[i]);
    }

   res.send(firstTen);

}

module.exports.home = function(req,res){                    // redirecting to html page
    res.sendFile(path.join(__dirname + '/../index.html'));

}