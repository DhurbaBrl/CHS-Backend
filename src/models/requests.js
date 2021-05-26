const mongoose=require('mongoose');

const helpRequestSchema=new mongoose.Schema({
    name:String,
    contactNumber:Number
})

const helpRequest=mongoose.model('helpRequest',helpRequestSchema)

module.exports=helpRequest;