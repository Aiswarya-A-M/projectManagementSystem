const express = require("express");
const router = require("./routes/router");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const sequelize = require("./config/database");
const app = express();
const port = 3000;

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Project Management System",
      version: "2.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/router.js"],
};
const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

app.use("/roles", router);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("all models are synchronized successfully");
  })
  .catch((error) => {
    console.log("error occurred", error);
  });

app.listen(port, () => {
  console.log("server running on port", port);
});
