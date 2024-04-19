module.exports = (sequelize, DataTypes) => {
  const VehicleModel = sequelize.define("VehicleModel", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return VehicleModel;
};
