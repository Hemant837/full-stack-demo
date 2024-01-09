const express = require("express");
const router = express.Router();

const actionsController = require("../controllers/actions-controller");

router.post("/contact-us", actionsController.contactUs);

module.exports = router;
