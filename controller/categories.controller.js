const CategoriesServices = require("../servises/categories.services");
const createCategory = async (req, res, next) => {
  try {
    const category = req.body;
    await CategoriesServices.postCategory(category);
    res.status(201).json({ status: "category created successfully" });
  } catch (err) {
    next({ status: 400, errMsg: err });
  }
};
module.exports = {
  createCategory,
};
