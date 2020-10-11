
const mongoose = require("mongoose")


const ipofuser= new mongoose.Schema({
    ip:{
        type:String,
        require:true 
    }

}) 

module.exports = mongoose.model('ipofuser',ipofuser)