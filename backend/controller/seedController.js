const db = require("../models/index");
const Car = db.car;
const Bike = db.bike;
const VehicleModel = db.vehicleModel;
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

    // add vehicle model
    const vehicleModel = await VehicleModel.bulkCreate([
      { type: "Cruiser", model: "Honda CB350" },
      { type: "Cruiser", model: "Harley-Davidson X440" },
      { type: "Cruiser", model: "Jawa" },
      { type: "Cruiser", model: "Bajaj Avenger Street 160" },

      { type: "Sports", model: "Yamaha R15 V4" },
      { type: "Sports", model: "Bajaj Pulsar RS 200" },
      { type: "Sports", model: "Suzuki Gixxer SF" },
      { type: "Sports", model: "BMW G310 RR" },

      { type: "Hatchback", model: "Tata Altroz" },
      { type: "Hatchback", model: "Maruti Suzuki Baleno" },
      { type: "Hatchback", model: "Hyundai Grand i10 Nios" },
      { type: "Hatchback", model: "Tata Tiago" },

      { type: "SUV", model: "Mahindra Scorpio" },
      { type: "SUV", model: "Hyundai Creta" },
      { type: "SUV", model: "Mahindra Bolero" },
      { type: "SUV", model: "Maruti Brezza" },

      { type: "Sedan", model: "Hyundai Verna" },
      { type: "Sedan", model: "Honda Amaze" },
      { type: "Sedan", model: "Škoda Slavia" },
      { type: "Sedan", model: "Tata Tigor" },
    ]);


    // Associate vehicles with types if needed

    // console.log('Seed data inserted successfully:', { cars, bike });
    res.status(200).json({ cars, bike, vehicleModel });
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

module.exports = { seedData };
