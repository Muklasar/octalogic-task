const express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')
const carCtrl = require("./controller/carController");
const bikeCtrl = require("./controller/bikeController");
const vehicleCtrl = require("./controller/vehicleController");
const seedCtrl = require("./controller/seedController");
const rentCtrl = require("./controller/rentController");
const app = express();

app.use(bodyParser.json());
app.use(cors())

require("./models/index");

// rent router
app.get('/rents/add', rentCtrl.addRent);

// car router
app.get('/cars', carCtrl.carList);

// // bike router
app.get('/bikes', bikeCtrl.bikeList);

// model router
app.get('/vehicle/:type', vehicleCtrl.models);

// data insert
app.get('/seedData', seedCtrl.seedData);

app.listen(5000, () => {
  console.log("server connected");
});
