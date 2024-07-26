import { error } from "console";
import express, { type Express } from "express";
import { ObjectId } from "mongodb";
import { Document } from "mongoose";
const router = express.Router()
const Task = require('../models/task')

router.get('/task', async (req,res)=>{
    try{
    const allTasks = await Task.find()
    res.json(allTasks);
    }catch(error){
        res.json(error);
    }
})

router.post('/task', (req,res)=>{
    const {name,category,user,date,status} = req.body;
    const task = new Task({name,category,user,date,status});
    try{
        task.save();
        res.status(201).json({info: "success"});
    }catch(error){
        res.json({info:error});
    }
})

router.put('/task/:id', (req,res)=>{
    const idReq = req.params.id;
    const taskUpdate = req.body;
    try{
    Task.findByIdAndUpdate( idReq, taskUpdate,
    {
      new: true,                       
    })
    .then(res.send('success'));
    }catch(err){
        res.send(err);
    }
})

router.get('/task/:id', async (req,res)=>{
    const id = req.params.id;

  // check if user exists
  const task = await Task.findById(id);
  res.json(task);

})
module.exports = router;