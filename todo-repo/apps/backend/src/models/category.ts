let categorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    iconUrl: String
})

module.exports = mongoose.model('Category', categorySchema)