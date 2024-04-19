module.exports = (sequelize, DataTypes)=>{
    const Bike = sequelize.define('Bike', {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  {
    timestamps: false,
  });
    return Bike
}

