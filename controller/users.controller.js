const UserServises = require("../servises/users.services");
const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    await UserServises.postUser(user);
    res.status(201).json({ status: "user created successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServises.getOneUser(id);
    res.status(200).json(result);
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const getAllUserAndCourse = async (req, res, next) => {
  try {
    const result = await UserServises.getAllUsers();
    res.status(200).json(result);
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const addCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    await UserServises.postCourseToUser(newCourse);
    res.status(201).json({ status: "course added successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
const updateuser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    await UserServises.patchUser(id, newData);
    res.status(201).json({ status: "user updated successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
module.exports = {
  createUser,
  getUserById,
  getAllUserAndCourse,
  addCourse,
  updateuser,
};
