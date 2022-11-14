const { Router } = require("express");
const router = Router();
const {
  createCourse,
  getAllCourse,
  getAllCourseInf,
  updateCourse,
} = require("../controller/courses.controller");

router.post("/", createCourse);
router.get("/", getAllCourse);
router.get("/info", getAllCourseInf);
router.patch("/:id", updateCourse);

module.exports = router;
