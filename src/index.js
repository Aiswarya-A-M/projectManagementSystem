const express = require("express");
const router = require("./routes/router");
const app = express();
app.use(express.json());

const port = 3000;
app.use("/roles", router);

app.listen(port, () => {
  console.log("server running on port", port);
});
