const db = require("../models/index");
const Car = db.car;
const Bike = db.bike;
const { sequelize } = require("../models");

async function seedData(req, res) {
  try {
    await sequelize.sync({ force: true }); // Sync models with database and drop existing tables

    const cars = await Car.bulkCreate([
      { type: "Hatchback" },
      { type: "SUV" },
      { type: "Sedan" },
    ]);

    const bike = await Bike.bulkCreate([
      { type: "Cruiser" },
      { type: "Sports" },
    ]);

    // Associate vehicles with types if needed

    // console.log('Seed data inserted successfully:', { cars, bike });
    res.status(200).json({ cars, bike });
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

module.exports = { seedData };
