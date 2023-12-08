const express = require("express");
const taskRouter = express.Router();
const taskTable = require("../controllers/taskTable");
const validator = require("../middleware/validator");
taskRouter.use(express.json());

/**
 * @swagger
 *   /task/{id}:
 *     get:
 *       summary: get a task
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: id of the task to get
 *       description: get a task.
 *       responses:
 *         200:
 *           description: Successful response
 */

taskRouter.get("/:id", taskTable.getTask);
/**
 * @swagger
 * /task/addTask:
 *   post:
 *     summary: add new task
 *     description: add new task.
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *               TaskName:
 *                 type: string
 *               EndDate:
 *                 type: string
 *               Status:
 *                 type: string
 *               Priority:
 *                 type: string
 *               projectId:
 *                 type: int
 *             required:
 *              - role
 *     responses:
 *       200:
 *         description: Successful response
 */

taskRouter.post("/addTask",taskTable.addTask);

module.exports = taskRouter;
