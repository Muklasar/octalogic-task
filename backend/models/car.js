module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Car;
};