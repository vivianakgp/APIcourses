const { Router } = require("express");
const router = Router();
//middlewares
const authToken = require("../middlewares/authToken");
//controllers
const {
  createUser,
  getUserById,
  getAllUserAndCourse,
  addCourse,
  updateuser,
} = require("../controller/users.controller");

router.post("/", createUser);
router.get("/:id", authToken, getUserById);
router.get("/", getAllUserAndCourse);
router.post("/addCourse", addCourse);
router.patch("/:id", updateuser);

module.exports = router;
