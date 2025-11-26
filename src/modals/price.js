const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  change24h: Number,
  marketCap: Number,
  volume24h: Number,
});

module.exports = mongoose.model("Price", priceSchema);
