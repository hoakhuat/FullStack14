const express= require('express');
const ApiRouter =express.Router();
const AuthRouter= require('../routers/authRouter');
const ImageRouter =require('../routers/imageRouter');
const UserRouter=require('../routers/userRouter');
ApiRouter.use('/image',ImageRouter);
ApiRouter.use('/users',UserRouter);
ApiRouter.use('/auth',AuthRouter);

module.exports= ApiRouter;