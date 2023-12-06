const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define("roles", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
