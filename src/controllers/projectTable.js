const projectValidation = require("../service/projectService");
const project = {
  async getProject(req, res) {
    try {
      const project = await projectValidation.validation(req.params.id);
      if (!project) {
        return res.json({ errors: { message: "project not exists" } });
      }
      res.send(project);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  async addProject(req, res) {
    try {
      const project = await projectValidation.validationOfNewProject(req.body);
      if (!project) {
        return res.json({ success: { message: "project added successfully" } });
      }
      return res.json({ errors: { message: "project already exists" } });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};

module.exports = project;
