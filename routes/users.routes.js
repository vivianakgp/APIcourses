const { Router } = require("express");
const router = Router();
const {
  createUser,
  getUserById,
  getAllUserAndCourse,
  addCourse,
  updateuser,
} = require("../controller/users.controller");

router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", getAllUserAndCourse);
router.post("/addCourse", addCourse);
router.patch("/:id", updateuser);

module.exports = router;
