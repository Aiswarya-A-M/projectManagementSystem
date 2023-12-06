const express = require("express");
const router = express.Router();

const getRoles = require("../controllers/service");
router.use(express.json());


/**
 * @swagger
 *   /roles/{id}:
 *     get:
 *       summary: get a role
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: id of the role to get
 *       description: get a role.
 *       responses:
 *         200:
 *           description: Successful response
 */

router.get("/:id", getRoles.getRoles);
/**
 * @swagger
 * /roles/addRole:
 *   post:
 *     summary: add new role
 *     description: add new role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *             required:
 *              - role
 *     responses:
 *       200:
 *         description: Successful response
 */

router.post("/addRole",getRoles.addRoles);

module.exports = router;
