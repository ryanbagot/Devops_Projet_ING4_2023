const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <h1>Bonjour Monsieur Gonzalo, bonjour Monsieur Bariteau !</h1>
      </body>
    </html>
  `);
});

module.exports = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port " + port);
});