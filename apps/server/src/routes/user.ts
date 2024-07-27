import express, { type Express } from "express";
const router = express.Router()
const User = require('../models/user')

router.get('/user', async (req,res)=>{
    try{
    const allUsers = await User.find()
    res.json(allUsers);
    }catch(error){
        res.json(error);
    }
})

router.post('/user', (req,res)=>{
    const {email,password,name} = req.body;
    const user = new User({email,password,name});
    try{
        user.save();
        res.status(201).json({info: "success"});
    }catch(error){
        res.json({info:error});
    }
})

router.put('/user/:id', (req,res)=>{
    const idReq = req.params.id;
    const userUpdate = req.body;
    try{
    User.findByIdAndUpdate( idReq, userUpdate,
    {
      new: true,                       
    })
    .then(res.send('success'));
    }catch(err){
        res.send(err);
    }
})

router.get('/user/:id', async (req,res)=>{
    const id = req.params.id;
  if(id){
    try{
    const category = await User.findById(id);
    res.json(category);
    }catch(err){
        res.json(err)
    }
  }
  

})
module.exports = router;