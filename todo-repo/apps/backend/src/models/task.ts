let mongoose = require('mongoose')
let validator = require('validator')

let taskSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    user: String,
    date: Date,
    status: String
})

module.exports = mongoose.model('Task', taskSchema)