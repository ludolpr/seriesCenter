const { DataTypes } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const userModel = db.define(
  "users",
  {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

// Méthode pour vérifier les informations de connexion
userModel.login = async function (email, password) {
  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    throw new Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Incorrect password");
  }
  return user;
};

module.exports = userModel;
