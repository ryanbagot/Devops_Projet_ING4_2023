const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <h1>Bonjour Monsieur Gonzalo, bonjour Monsieur Bariteau !</h1>
        <div id="bottom-container">
          <button id="increment">Plus !</button>
          <p id="value">0</p>
        </div>
        <div id="sidebar">
          <h2>Outils utilisés</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Azure</li>
            <li>Vagrant</li>
            <li>Ansible</li>
            <li>Docker</li>
            <li>k8s</li>
            <li>Graffana</li>
            <li>Prométheus</li>
          </ul>
        </div>
        <script>
          document.getElementById('increment').addEventListener('click', function() {
            let value = document.getElementById('value');
            value.textContent = parseInt(value.textContent) + 1;
          });
        </script>
      </body>
    </html>
  `);
});

module.exports = app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port " + port);
});
