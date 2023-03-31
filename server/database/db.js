const mongoose = require('mongoose');

const Connection = async (username,password)=>{

    const URL = `mongodb://${username}:${password}@ac-mxkjwkw-shard-00-00.bm1nlgz.mongodb.net:27017,ac-mxkjwkw-shard-00-01.bm1nlgz.mongodb.net:27017,ac-mxkjwkw-shard-00-02.bm1nlgz.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-kremtw-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

      await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

      console.log('Database Connected Successfully');


        
    } catch (error) {
        console.log(`error while connecting with the database`, error)
        
    }

}

module.exports = Connection;

