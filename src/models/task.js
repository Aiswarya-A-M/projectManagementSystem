const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project=require('./project');

const Task = sequelize.define("task", {
  TaskId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique:true
  },
  TaskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Priority: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model:Project,
        key:'projectId'
    }
  },
},{
indexes: [   
    {
      unique: true,
      fields: ['TaskName']
    },
]
}
);

Task.belongsToMany(Project,{
    through:'projectTask',
    foreignKey:'projectId'})

module.exports = Task;
