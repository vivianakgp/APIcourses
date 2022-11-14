const Categories = require("../models/categories.models");
class CategoriesServices {
  static async postCategory(newCategory) {
    try {
      await Categories.create(newCategory);
      return true;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = CategoriesServices;
