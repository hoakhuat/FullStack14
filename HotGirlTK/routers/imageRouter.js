const express= require('express');
const ImageRouter = express.Router();
const ImageModel=require('../models/image.model');

ImageRouter.post('/',(req,res)=>{
    console.log(req.body);
    const {imageUrl,owner,description,title} =req.body || {}
    ImageModel.create({imageUrl,owner,description,title})
   .then(ImageCreated=>{
      res.status(201).json({success:1,image:ImageCreated});
   })
   .catch(err=>res.status(500).json({success:0,err:err}))
})

ImageRouter.get('/',(req,res)=>{
    ImageModel.find({})
   .populate('owner','username name')
   .exec((err,images)=>{
    if(err) res.status(500).json({success:0,error:err})
    else res.json({success:1,image:images}); 
   })

  
})



module.exports= ImageRouter;