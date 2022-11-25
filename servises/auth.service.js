const bcrypt = require("bcrypt");
//models
const Users = require("../models/users.models");
class AuthService {
  static async login(email, password) {
    try {
      const registeredUser = await Users.findOne({ where: { email } });
      //console.log(registeredUser);
      if (registeredUser) {
        const isValid = bcrypt.compareSync(password, registeredUser.password);
        return { isValid, registeredUser };
      }
      return false;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = AuthService;
