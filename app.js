const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./src/config/config");
const order = require("./src/app/routes/order");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
config.connectToDatabase();

app.use("/", order);

app.use("*", (req, res, next) => {
  next((404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).json({
    status: "error",
    message,
  });
});
