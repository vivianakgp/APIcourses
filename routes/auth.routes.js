const { Router } = require("express");
const router = Router();
const { userLogin } = require("../controller/auth.controller");

router.post("/login", userLogin);

module.exports = router;
//adri@gmail.com
//encrypted pass
