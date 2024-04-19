module.exports = (sequelize, DataTypes) =>{

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    wheels: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    vehicleType: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    model: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    startDate: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    endDate: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

  },
  {
    // Other model options go here
    tableName: 'users',
    // timestamps: false,
  },
);
return User

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
}