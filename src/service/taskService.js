const query = require("../repository/getTask");

const tasks = {
    async validation(id) {
        try {
          const task = await query.getTask(id);
          if(!task){
              return false
          }
           return task
        } catch (error) {
          console.log(error);
          return ({ error: "Server error" });
        }
      },
    async validationOfNewTask(task){
       console.log("my",task)
        const taskExist=await query.taskExist(task.TaskName)
        if(taskExist){
            console.log("hello")
            return true;
        }
        console.log("hi")
        const newTask=await query.addTask(task);
        return false;
    }
};

module.exports=tasks
