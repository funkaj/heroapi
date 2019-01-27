const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  bio: String,
  date: { type: Date, default: Date.now }
});

const Hero = mongoose.model("hero", heroSchema);

module.exports = Hero;
