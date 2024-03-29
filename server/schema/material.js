const mongoose = require("mongoose");

const MaterialData = new mongoose.Schema({
  materialname: String,
  materialcount: String,
  Availability: String,
  maintenance: String,
  description: String,
  Donatable: Boolean,
});

const Material = mongoose.model("MaterialData", MaterialData);
module.exports = Material;
