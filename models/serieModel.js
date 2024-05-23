const db = require("../config/db");
const { DataTypes } = require("sequelize");
const User = require("./userModel");
const Category = require("./categoryModel");

const postModel = db.define(
  "series",
  {
    idSerie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameSerie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serieDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "idUser",
      },
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "idCategory",
      },
    },
  },
  {
    tableName: "series",
    timestamps: true,
  }
);
module.exports = postModel;
