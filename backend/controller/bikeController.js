const db = require("../models/index");
const Bike = db.bike;

const bikeList = async (req, res) => {
  try {
    const cars = await Bike.findAll();
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  bikeList,
};
