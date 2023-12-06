const express = require("express");
const router = require("./routes/router");
const sequelize = require("./config/database");

const app = express();
const port = 3000;

app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("all models are synchronized successfully");
  })
  .catch((error) => {
    console.log("error occurred", error);
});
  
app.use("/roles", router);

app.listen(port, () => {
  console.log("server running on port", port);
});