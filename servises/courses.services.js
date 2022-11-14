const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async postCourse(newCourse) {
    try {
      await Courses.create(newCourse);
      return true;
    } catch (err) {
      throw err;
    }
  }
  static async getCourses() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title", "description", "instructor"],
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async getCoursesRelations() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title", "description", "instructor"],
        include: [
          { model: Categories, attributes: ["name"] },
          { model: Videos, attributes: ["title", "url"] },
        ],
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async patchCourse(id, newData) {
    try {
      await Courses.update(newData, { where: { id } });
      return true;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = CoursesServices;
