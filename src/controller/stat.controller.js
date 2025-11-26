const Stat = require("../modals/Stat");

exports.getAll = async (req, res) => {
  const stats = await Stat.find();
  res.json(stats);
};
