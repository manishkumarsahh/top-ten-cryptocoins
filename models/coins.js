const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    allcoins: {
        type: String
        
    },
    id:{
        type: Number
    }
}, {
    timestamps: true
});


const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;