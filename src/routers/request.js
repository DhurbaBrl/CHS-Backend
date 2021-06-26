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

router.get('/request/data/:id',async(req,res)=>{
    try{
        const requestData=await helpRequest.findById(req.params.id)
        res.status(200).send(requestData)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/request/data',async (req,res)=>{
    const regexs=req.query.fieldInput
    try{
    if (regexs){
      helpRequest.find({$or : [{category:{$regex:regexs,$options:'$i'}},{name:{$regex:regexs,$options:'$i'}}]}).then((data)=>{
          res.status(200).send(data)
      })
    }else{
        
            const getRequestAll=await helpRequest.find({})
            res.status(200).send(getRequestAll)
    }
}catch(e){
    res.status(400).send(e)
}
})

module.exports=router;