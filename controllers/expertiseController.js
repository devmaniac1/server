const Expertise = require("../models/expertiseModel");

const createExpertise = async (req, res) => {
  const { skillName, skillLogo } = req.body;

  try {
    const newExpertise = new Expertise({ skillName, skillLogo });
    await newExpertise.save();
    res.status(201).json(newExpertise);
  } catch (error) {
    res.status(500).json({ message: "Failed to create expertise", error });
  }
};

const getAllExpertise = async (req, res) => {
  try {
    const expertise = await Expertise.find();
    res.status(200).json(expertise);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expertise", error });
  }
};

const getExpertiseById = async (req, res) => {
  const { id } = req.params;
  try {
    const expertise = await Expertise.findById(id);
    if (!expertise) {
      return res.status(404).json({ message: "Expertise not found" });
    }
    res.status(200).json(expertise);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expertise by ID", error });
  }
};

const updateExpertise = async (req, res) => {
  const { id } = req.params;
  const { skillName, skillLogo } = req.body;

  try {
    const expertise = await Expertise.findByIdAndUpdate(
      id,
      { skillName, skillLogo },
      { new: true }
    );
    if (!expertise) {
      return res.status(404).json({ message: "Expertise not found" });
    }
    res.status(200).json(expertise);
  } catch (error) {
    res.status(500).json({ message: "Failed to update expertise", error });
  }
};

const deleteExpertise = async (req, res) => {
  const { id } = req.params;
  try {
    const expertise = await Expertise.findByIdAndDelete(id);
    if (!expertise) {
      return res.status(404).json({ message: "Expertise not found" });
    }
    res.status(200).json({ message: "Expertise deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete expertise", error });
  }
};

module.exports = {
  createExpertise,
  getAllExpertise,
  getExpertiseById,
  updateExpertise,
  deleteExpertise,
};
