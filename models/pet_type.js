const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = require("../databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);
const petTypeModel = sequelize.define(
  "pet_type",
  {
    pet_type_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: { type: DataTypes.STRING(50), allowNull: false, unique: true },
  },
  {
    tableName: "pet_type",
    timestamps: false,
    name: {
      singular: "pet_type",
      plural: "pet_type",
    },
  },
);
module.exports = petTypeModel;
