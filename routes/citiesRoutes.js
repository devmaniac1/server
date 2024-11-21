const express = require("express")
const {getCities,getCity,createCity,deleteCity} = require("../controllers/citiesController")

const router = express.Router()

router.route("/getCities").get(getCities)
router.route("/getCity/:id").get(getCity)
router.route("/createCity").post(createCity)
router.route("/:id").delete(deleteCity)

module.exports = router