const Users = require("./users.models");
const Courses = require("./courses.models");
const RelUserCourses = require("./relUserCourses.model");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
  // 1-n
  Courses.hasMany(Categories, { foreignKey: "course_id" });
  Categories.belongsTo(Courses, { foreignKey: "course_id" }); // foreignKey not need
  Courses.hasMany(Videos, { foreignKey: "course_id" });
  Videos.belongsTo(Courses, { foreignKey: "course_id" }); //not need
  // many to many
  Users.hasMany(RelUserCourses, { foreignKey: "user_id" });
  RelUserCourses.belongsTo(Users, { foreignKey: "user_id" });
  Courses.hasMany(RelUserCourses, { foreignKey: "course_id" });
  RelUserCourses.belongsTo(Courses, { foreignKey: "course_id" });
};
module.exports = initModels;
