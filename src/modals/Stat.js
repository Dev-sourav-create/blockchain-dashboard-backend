const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  key: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  delta: { type: String, required: true },
  icon: { type: String },
});

module.exports = mongoose.model("Stat", statSchema);
