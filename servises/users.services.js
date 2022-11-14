const Users = require("../models/users.models");
const RelUserCourses = require("../models/relUserCourses.model");
const Courses = require("../models/courses.models");

class UsersServices {
  static async postUser(user) {
    try {
      await Users.create(user);
      return true;
    } catch (err) {
      throw err;
    }
  }
  static async getOneUser(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "firstName", "lastName", "email"],
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async getAllUsers() {
    try {
      const result = await Users.findAll({
        attributes: ["id", "firstName", "lastName", "email"],
        include: {
          model: RelUserCourses,
          attributes: ["courseId"],
          include: {
            model: Courses,
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async postCourseToUser(newCourse) {
    try {
      await RelUserCourses.create(newCourse);
      return true;
    } catch (err) {
      throw err;
    }
  }
  static async patchUser(id, newData) {
    try {
      await Users.update(newData, { where: { id } });
      return true;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = UsersServices;
