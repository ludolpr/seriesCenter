const { DataTypes } = require("sequelize");
const db = require("../config/db");

const categoryModel = db.define(
  "Category",
  {
    idCategory: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

module.exports = categoryModel;
