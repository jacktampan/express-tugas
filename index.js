const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routeNotes = require("./route/noteRoute");

const dotenv = require("dotenv");
const { testConnection } = require("./database/Db");
dotenv.config();

app.use(bodyParser.json());
app.use(routeNotes);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});
