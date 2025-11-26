const block = require("../modals/block");

exports.getAll = async (req, res) => {
  const Blocks = await block.find().sort({ height: -1 });
  res.json(Blocks);
};
