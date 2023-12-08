const express = require("express");
const projectRouter = express.Router();
const projectTable = require("../controllers/projectTable");
const validator = require("../middleware/validator");
projectRouter.use(express.json());

/**
 * @swagger
 *   /project/{id}:
 *     get:
 *       summary: get a project
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: id of the project to get
 *       description: get a project.
 *       responses:
 *         200:
 *           description: Successful response
 */

projectRouter.get("/:id", projectTable.getProject);
/**
 * @swagger
 * /project/addProject:
 *   post:
 *     summary: add new project
 *     description: add new project.
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *               ProjectName:
 *                 type: string
 *               StartDate:
 *                 type: string
 *               EndDate:
 *                 type: string
 *               Status:
 *                 type: string
 *               ProjectLead:
 *                 type: int
 *             required:
 *              - role
 *     responses:
 *       200:
 *         description: Successful response
 */

projectRouter.post("/addProject",projectTable.addProject);

module.exports = projectRouter;
