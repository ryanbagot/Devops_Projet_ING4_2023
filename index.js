const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

module.exports = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port " + port);
});
