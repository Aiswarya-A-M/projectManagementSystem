const query = require("../repository/getProject");

const projects = {
    async validation(id) {
        try {
          const project = await query.getProject(id);
          if(!project){
              return false
          }
           return project
        } catch (error) {
          console.log(error);
          return ({ error: "Server error" });
        }
      },
    async validationOfNewProject(project){
       console.log("my",project)
        const projectExist=await query.projectExist(project.ProjectName)
        if(projectExist){
            console.log("hello")
            return true;
        }
        console.log("hi")
        const newProject=await query.addProject(project);
        return false;
    }
};

module.exports=projects
