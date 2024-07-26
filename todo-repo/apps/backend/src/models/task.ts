let mongooseTask = require('mongoose') 

let taskSchema = new mongooseTask.Schema({
    id: Number,
    name: String,
    category: String,
    user: String,
    date: Date,
    status: String
})

module.exports = mongooseTask.model('Task', taskSchema)