const express = require("express");
var bodyParser = require("body-parser");
const carCtrl = require("./controller/carController");
const bikeCtrl = require("./controller/bikeController");
const seedCtrl = require("./controller/seedController");
const app = express();

app.use(bodyParser.json());
require("./models/index");


// car router
app.get('/cars', carCtrl.carList);

// // bike router
app.get('/bikes', bikeCtrl.bikeList);

// data insert
app.get('/seedData', seedCtrl.seedData);

app.listen(5000, () => {
  console.log("server connected");
});
