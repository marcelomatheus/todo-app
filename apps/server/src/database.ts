let mongoose = require('mongoose');
require('dotenv').config()
import "dotenv/config"

export default function connectDB(){
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const uri = `mongodb+srv://${user}:${password}@clustertodo.i8gccsr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterToDo`
    try{
    mongoose.connect(uri)
    .then(()=>{
        console.log("Database connected");
    })}
    catch(err){
        console.log(err)  
    }

}