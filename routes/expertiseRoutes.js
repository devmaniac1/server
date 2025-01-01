const express = require("express");
const {
  createExpertise,
  getAllExpertise,
  getExpertiseById,
  updateExpertise,
  deleteExpertise,
} = require("../controllers/expertiseController");

const router = express.Router();

router.route("/").get(getAllExpertise);
router.route("/:id").get(getExpertiseById);
router.route("/").post(createExpertise);
router.patch("/:id", updateExpertise);
router.route("/:id").delete(deleteExpertise);

module.exports = router;
