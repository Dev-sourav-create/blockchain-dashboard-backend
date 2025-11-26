const express = require("express");
const Employee = require("../modals/employee");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const all = await Employee.find();
    res.json(all);
  } catch (e) {
    res.status(500).json({ msg: "Server Error", e });
  }
});

module.exports = router;
