const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = require("../databaseConnectionSequelize");
const userModel = include("models/web_user");
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

petModel.belongsTo(userModel, {
  as: "owner",
  timestamps: false,
  foreignKey: "web_user_id",
});
userModel.hasMany(petModel, {
  as: "pets",
  timestamps: false,
  foreignKey: "web_user_id",
});
module.exports = petModel;
