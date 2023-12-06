const express = require("express");
const router = express.Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const query = require("../repository/getQuery");
const pool = require("../config/database");

router.use(express.json());

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Project Management System",
      version: "2.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/router.js"],
};
const swaggerSpec = swaggerJsDoc(options);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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

router.get("/:id", (req, res) => {
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err.stack);
      return;
    } else {
     
      const id=parseInt(req.params.id)-1;
      return res.send(`${result.rows[id].role}`);
     
    }
  });
});
module.exports = router;
