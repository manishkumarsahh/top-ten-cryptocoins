

//connecting to mongo atlas
const mongoose = require('mongoose');
const db =  'mongodb+srv://manish:manish123@cluster0.1vl12.mongodb.net/coins?retryWrites=true&w=majority';
mongoose.connect(db, {
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(() => {
    console.log(`connection successful`);
}).catch((err)=> console.log(`no connection`));



