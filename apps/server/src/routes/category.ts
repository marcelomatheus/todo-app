import express, { type Express } from "express";
const router = express.Router()
const Category = require('../models/category')

router.get('/category', async (req,res)=>{
    try{
    const allCategories = await Category.find()
    res.json(allCategories);
    }catch(error){
        res.json(error);
    }
})

router.post('/cateogry', (req,res)=>{
    const {name,iconUrl} = req.body;
    const category = new Category({name,iconUrl});
    try{
        category.save();
        res.status(201).json({info: "success"});
    }catch(error){
        res.json({info:error});
    }
})

//update user datas submitted via requirements for id params
router.put('/user/:id', (req,res)=>{
    const idReq = req.params.id;
    const categoryUpdate = req.body;
    try{
    Category.findByIdAndUpdate( idReq, categoryUpdate,
    {
      new: true,                       
    })
    .then(res.send('success'));
    }catch(err){
        res.send(err);
    }
})

//found user for id params
router.get('/user/:id', async (req,res)=>{
    const id = req.params.id;
  if(id){
    try{
    const category = await Category.findById(id);
    res.json(category);
    }catch(err){
        res.json(err)
    }
  }
  
})
module.exports = router;