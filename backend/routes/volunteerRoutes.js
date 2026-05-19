const express = require("express");

const volunteerController = require("../controllers/volunteerController");

const router = express.Router();

router.post("/", volunteerController.create);
router.get("/", volunteerController.list);

module.exports = router;