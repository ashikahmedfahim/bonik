const express = require('express');
const app = express();
require("dotenv").config();
const config = require("./src/config/config");

const port = process.env.PORT || 3000;




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
config.connectToDatabase();