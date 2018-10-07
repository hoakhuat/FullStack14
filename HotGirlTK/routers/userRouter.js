const express= require('express');
const UserRouter = express.Router();
const UserModel=require('../models/user.model');



//CRUD
UserRouter.post('/',(req,res)=>{
    console.log(req.body);
    const {username,password,name,avatar,gender} =req.body ||{};
     UserModel.create({username,password,name,avatar,gender})
   .then(userCreated=>{
      res.status(201).json({success:1,user:userCreated});
   })
   .catch(err=>res.status(500).json({success:0,err:err}))
})

UserRouter.get('/',(req,res)=>{
   UserModel.find({},{password:0},(err,user)=>{
       if(err) res.status(500).json({success:0,error:err})
       else res.json({success:1,user:user}); 
   })
})
UserRouter.get('/:id',(req,res)=>{
    let id= req.params.id;
     UserModel.findById(id,(err,userFound)=>{
         if(err) console.log("loi day");
         else res.send(userFound);
     })
})

UserRouter.put('/:id',(req,res)=>{
    const {password,name,avatar,gender} =req.body ||{};
    const userChange= {password,name,avatar,gender};
    const userId= req.params.id;
    UserModel.findById(userId,(err,userFound)=>{
        if(err) res.status(500).json({success:0,error:err})
        else if(!userFound) res.status(404).json({success:0,error:'no such user'});
        else {
           for(key in userChange){
               if(userChange[key]!== null && userChange[key]!==undefined)
               userFound[key]=userChange[key];
           }

            userFound.save((err,userUpdated)=>{
                if(err) res.status(500).json({success:0,error:err})
                else res.send({success:1,users:userUpdated}); 
            })
        }
    })
})   


module.exports= UserRouter;