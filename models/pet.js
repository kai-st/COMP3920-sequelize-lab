const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = require("../databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);
const petModel = sequelize.define(
  "pet",
  {
    pet_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(50), allowNull: false },
  },
  {
    tableName: "pet",
    timestamps: false,
    name: {
      singular: "pet",
      plural: "pet",
    },
  },
);

module.exports = petModel;
