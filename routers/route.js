const express = require("express");
router = express.Router();
route = require("../controlllers/api");

router.get("/", route.api);


module.exports = router;