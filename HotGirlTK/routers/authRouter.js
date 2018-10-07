const express= require('express');
const AuthRouter= express.Router();
const UserModel =require('../models/user.model');
const bcrypt =require('bcrypt-nodejs');
AuthRouter.post('/login',(req,res)=>{
    const {username,password}= req.body;
   UserModel.findOne({username},(err,userFound)=>{
       if(err) res.status(500).json({success:0,error:err})
       else if(!userFound) res.status(404).json({success:0,error:"no such user"})
       else {
           if(bcrypt.compareSync(password,userFound.password)){
               req.session.user={ userId:userFound._id};
               res.json({success:1,message:"login successfully"});
           }
           else res.status(401).json({success:0,error:"wrong pass "});
       }
   })
})

AuthRouter.delete('/logout',(req,res)=>{
    req.session.destroy();
    res.send({success:1,message:'logout successffully'});
})

module.exports =AuthRouter;