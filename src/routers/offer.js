const express = require('express');
const router=new express.Router();
const helpOffer=require('../models/offer')

router.post('/offer',async (req,res)=>{
    const hlpOffer=new helpOffer(req.body);
    try{
        await hlpOffer.save();
        res.status(201).send(hlpOffer);
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports=router;