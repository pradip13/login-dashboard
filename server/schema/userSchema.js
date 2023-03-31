const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'crud');

const crud = mongoose.model('crud',userSchema);
module.exports = crud;


