const express = require("express");
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectsController");

const router = express.Router();

router.route("/").get(getAllProjects);
router.route("/:id").get(getProjectById);
router.route("/").post(createProject);
router.put("/:id", updateProject);
router.route("/:id").delete(deleteProject);

module.exports = router;
