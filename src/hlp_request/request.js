const express=require('express');
const router= new express.Router();
const helpRequest=require('../models/requests')

router.post('/request',async (req, res)=>{
      const helpReq=new helpRequest({
          name:req.body.name,
          number:req.body.number,
      });
      try{
          await helpReq.save();
          res.status(201).send(helpReq);
      }catch(e){
          res.send(e);
      }
})

module.exports=router;