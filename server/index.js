const express = require("express"); //import using Common.js modules
const app = express();

// Route Handler for "Get" type
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//If enviroment variable is defined by host, assign to 'PORT'; else assign 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
