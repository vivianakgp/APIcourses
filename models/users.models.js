const bcrypt = require("bcrypt");
// database
const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "last_name",
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (newUser, options) => {
        const { password } = newUser;
        // hash is the encrypted password, 8(8 characters added for more security)
        const hash = bcrypt.hashSync(password, 8);
        //new value to the simple password
        newUser.password = hash;
      },
    },
  }
);
module.exports = Users;
