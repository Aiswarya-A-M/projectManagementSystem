const taskValidation = require("../service/taskService");
const task = {
  async getTask(req, res) {
    try {
      const task = await taskValidation.validation(req.params.id);
      if (!task) {
        return res.json({ errors: { message: "task not exists" } });
      }
      res.send(task);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  async addTask(req, res) {
    try {
      const task = await taskValidation.validationOfNewTask(req.body);
      if (!task) {
        return res.json({ success: { message: "task added successfully" } });
      }
      return res.json({ errors: { message: "task already exists" } });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};

module.exports = task;
