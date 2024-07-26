let mongooseUser = require('mongoose') 

let userSchema = new mongooseUser.Schema({
    id: Number,
    name: String,
    email: String,
    password: String
})

module.exports = mongooseUser.model('User', userSchema)