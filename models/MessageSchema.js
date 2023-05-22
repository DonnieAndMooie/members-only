const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema({
  title: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now() },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("messages", messageSchema);
