const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    title: {type: String, required: true},
    timestamp: {type: Date, required: true, default: Date.now()},
    content: {type: String, required: true}
})

module.exports = mongoose.model("messages", MessageSchema)