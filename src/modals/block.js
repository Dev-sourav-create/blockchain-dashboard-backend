const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  chain: String,
  height: Number,
  time: Date,
  txCount: Number,
  sizeMB: Number,
});

module.exports = mongoose.model("Block", blockSchema);
