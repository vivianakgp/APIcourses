var jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
  try {
    let token;
    const { id } = req.params;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      // .replace("Bearer", ' ')
    }
    if (!token) {
      res.status(403).json({ status: "session invalid" });
    }
    //validate token
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithm: "HS512",
    });
    const { userId } = decoded;
    if (Number(id) == userId) {
      next();
    }
    // res.status(400).json({ status: "no tienes permisos" });
  } catch (err) {
    next({ status: 400, errMsg: err, customMsg: "verify token failed" });
  }
};
module.exports = authToken;
