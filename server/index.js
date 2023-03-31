const express = require ('express');
const Connection = require("./database/db.js");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const Routes = require("./routes/route.js");
const app = express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);
const PORT = 8000;

// app.use(bodyParser.json({extended:true}));


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);



app.listen(PORT, ()=> console.log(`server is running on PORT : ${PORT}`))