const mongoose=require('mongoose');
const validator=require('validator');

const helpOfferSchema=new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minLength:3
    },
    contactNumber:{
        type:Number,
        trim:true,
        required: true,
        minLength:5,
        maxLength:15
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        validate(email){
            const checkEmail=validator.isEmail(email)
            if(checkEmail == false){
                throw new Error('Email is invalid!');
            }
        }
    },
    address:{
        type:String,
        trim:true,
        required: true,
        minLength:3
    },
    message:{
        type:String,
        trim:true,
        required: true,
        minLength:10
    }
})

const helpOffer=mongoose.model('helpOffer',helpOfferSchema)

module.exports=helpOffer;