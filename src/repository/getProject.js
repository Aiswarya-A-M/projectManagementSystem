const Project = require("../models/project");
const projects = {
  async getProject(id) {
    try {
      const project = await Project.findByPk(id);
      return project;
    } catch (error) {
      console.log(error);
      return { error: "Server error" };
    }
  },
  async projectExist(ProjectName){
    try {
        const projectExist = await Project.findOne({
          where: { ProjectName: ProjectName },
          attributes: ["projectId", "ProjectName"],
        });
        if (projectExist) {
          return true;
        }
        return false;
    } catch (error) {
        console.log(error);
      }

  },
  async addProject(project) {
    try{
      const newProject = await Project.create({ ProjectName: `${project.ProjectName}`, StartDate: `${project.StartDate} `,EndDate: `${project.EndDate }`,Status: `${project.Status }`,Status: `${project.Status }`,ProjectLead: `${project.ProjectLead }`});
      return newProject;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = projects;
