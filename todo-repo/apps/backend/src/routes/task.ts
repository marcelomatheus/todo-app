import express, { type Express } from "express";
const router = express.Router()
const Task = require('../models/task')

router.get('/task', async (req,res)=>{
    const allTasks = await Task.find()
    res.json({allTasks})
})

router.post('/create-task', (req,res)=>{
    const {name,category,user,date,status} = req.body;
    const task = new Task({name,category,user,date,status});
    try{
        task.save();
        res.status(201).json({info: "success"})
    }catch(error){
        res.json({info:error});
    }
})

module.exports = router;