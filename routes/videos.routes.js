const { Router } = require("express");
const router = Router();
const { createVideo } = require("../controller/videos.controller");

router.post("/", createVideo);

module.exports = router;
