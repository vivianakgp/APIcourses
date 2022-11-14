const { Router } = require("express");
const router = Router();
const { createCategory } = require("../controller/categories.controller");

router.post("/", createCategory);

module.exports = router;
