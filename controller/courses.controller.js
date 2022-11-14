const CoursesServices = require("../servises/courses.services");
const createCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    await CoursesServices.postCourse(newCourse);
    res.status(200).json({ status: "course created successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const getAllCourse = async (req, res, next) => {
  try {
    const result = await CoursesServices.getCourses();
    res.status(200).json(result);
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const getAllCourseInf = async (req, res, next) => {
  try {
    const result = await CoursesServices.getCoursesRelations();
    res.status(200).json(result);
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    await CoursesServices.patchCourse(id, newData);
    res.status(200).json({ status: "course updated successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};

module.exports = {
  createCourse,
  getAllCourse,
  getAllCourseInf,
  updateCourse,
};
