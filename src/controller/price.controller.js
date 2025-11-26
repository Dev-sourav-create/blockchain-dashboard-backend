const price = require("../modals/price");

exports.getAll = async (req, res) => {
  const prices = await price.find();
  res.json(prices);
};
