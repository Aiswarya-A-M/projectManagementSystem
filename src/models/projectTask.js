const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project=require('./project');
const Task=require('./task');

const projectTask = sequelize.define("projectTask", {
  
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
}

);

module.exports = Role;
