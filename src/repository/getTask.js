const Task = require("../models/task");
const tasks = {
  async getTask(id) {
    try {
      const task = await Task.findByPk(id);
      return task;
    } catch (error) {
      console.log(error);
      return { error: "Server error" };
    }
  },

  async taskExist(taskName) {
    try {
      const taskExist = await Task.findOne({
        where: { TaskName: taskName },
      });
      if (taskExist) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  },

  async addTask(task) {
    try {
        console.log(task.TaskName)
      const newTask = await Task.create({
        TaskName: `${task.TaskName}`,
        EndDate: `${task.EndDate}`,
        Status: `${task.Status}`,
        Priority: `${task.Priority}`,
        ProjectId: `${task.projectId}`,
      });
      return newTask;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = tasks;
