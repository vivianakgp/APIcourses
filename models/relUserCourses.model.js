const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

const RelUserCourses = db.define("relUserCourses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: "course_id",
    references: {
      key: "id",
      model: Courses,
    },
    allowNull: false,
  },
});
module.exports = RelUserCourses;
