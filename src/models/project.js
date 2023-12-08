const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Project = sequelize.define("project", {
    
  projectId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StartDate: {
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
  ProjectLead: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
indexes: [   
    {
      unique: true,
      fields: ['ProjectName']
    },
]
}
);

module.exports = Project;
