const mongoose = require('mongoose');

const Connection = async (username,password)=>{

    const URL = `mongodb://${username}:${password}@ac-uerkpdq-shard-00-00.bmdil1l.mongodb.net:27017,ac-uerkpdq-shard-00-01.bmdil1l.mongodb.net:27017,ac-uerkpdq-shard-00-02.bmdil1l.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-s6jzbs-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

      await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

      console.log('Database Connected Successfully');


        
    } catch (error) {
        console.log(`error while connecting with the database`, error)
        
    }

}

module.exports = Connection;

