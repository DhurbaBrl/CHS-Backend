const express=require('express');
const router= new express.Router();
const helpRequest=require('../models/requests')

router.post('/request',async (req, res)=>{
    const helpReq=new helpRequest(req.body)
    
      try{
          await helpReq.save();
          res.status(201).send(helpReq);
      }catch(e){
          res.status(400).send(e);
      }
})

module.exports=router;