const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testDB", "root", "1234", {
  host: "localhost",
  dialect:
    'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {} 
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user')(sequelize, DataTypes)
db.car = require('./car')(sequelize, DataTypes)
db.bike = require('./bike')(sequelize, DataTypes)
db.sequelize.sync()

module.exports = db