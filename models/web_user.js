const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = require("../databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);
const userModel = sequelize.define(
  "web_user",
  {
    web_user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password_hash: { type: DataTypes.STRING, allowNull: true },
  },
  {
    tableName: "web_user",
    timestamps: false,
    name: {
      singular: "web_user",
      plural: "web_user",
    },
  },
);
module.exports = userModel;
