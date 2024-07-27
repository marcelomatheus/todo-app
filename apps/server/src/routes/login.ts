import express, { type Express } from "express";
const router = express.Router()
const User = require('../models/user')

//do the validation login -> return 'validation: true' for checked validation or 'validation: false' for unchecked validation
router.get('/login', async (req,res)=>{
    const {emailReq, passwordReq} = req.body;
    try{
        const {email, password} = await User.find({email: emailReq});
        if(email){
            if(password===passwordReq){
                res.json({validation: true})
            }else{
                res.json({validation: false})
            }
        }else{
            res.json({validation: false})
        }
    }catch(err){
        res.json(err)
    }
})

module.exports = router;