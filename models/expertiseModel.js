const mongoose = require("mongoose");

const expertiseSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillLogo: {
    type: String,
    required: true,
  },
});

const Expertise = mongoose.model("Expertise", expertiseSchema);

module.exports = Expertise;
