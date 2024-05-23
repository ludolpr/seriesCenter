const router = require("express").Router();
const postController = require("../controller/postController");

// auth
router.get("/getAllSeries", postController.getAllSeries);
router.post("/createSeries", postController.createSeries);
router.get("/getSeriesById", postController.getSeriesById);
router.put("/updateSeries", postController.updateSeries);
router.delete("/deleteSeries", postController.deleteSeries);

// export des routes
module.exports = router;
