const db = require("../models/index");
const VehicleModel = db.vehicleModel;

const models = async (req, res) => {
  try {
    const { type } = req.params;
    const model = await VehicleModel.findAll({
      where:{
        type
      }
    });
    res.json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  models
};
