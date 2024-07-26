let mongooseCategory = require('mongoose') 

let categorySchema = new mongooseCategory.Schema({
    id: Number,
    name: String,
    iconUrl: String
})

module.exports = mongooseCategory.model('Category', categorySchema)