import express, { type Express } from "express";
const router = express.Router()
const Category = require('../models/category')

router.get('/category', (req,res)=>{
    res.send({category: 'A'})
})

router.post('/category', (req,res)=>{
    const {name,iconUrl} = req.body;
    const category = new Category({name,iconUrl});
    try{
        category.save();
        res.status(201).json({info: "success"})
    }catch(error){
        res.json({info:error});
    }
})

module.exports = router;