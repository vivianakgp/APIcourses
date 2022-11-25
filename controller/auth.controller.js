const jwt = require("jsonwebtoken");
require("dotenv").config();
// services
const AuthService = require("../servises/auth.service");
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    //result.isValid result.registeredUser
    if (!result.registeredUser || !result.isValid) {
      res.status(401).json({ message: "invalid email or pass" });
    }
    const userData = {
      email: result.registeredUser.email,
      userName: result.registeredUser.firstName,
      userId: result.registeredUser.id,
    };
    const token = jwt.sign(userData, process.env.JWT_SECRET, {
      algorithm: "HS512",
      expiresIn: "1h",
    });
    userData.token = token;
    res.json(userData);
  } catch (err) {
    next({
      status: 401,
      errMsg: err,
      customMsg: "invalid credentials",
    });
  }
};
module.exports = {
  userLogin,
};
// to make the signature more secure
//require('crypto').randomBytes(64).toString('hex')
