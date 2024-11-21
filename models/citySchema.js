const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});

const citySchema = mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  position: {
    type: positionSchema,
    required: true,
  },
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
});

const city = mongoose.model('City', citySchema);

module.exports = city;
