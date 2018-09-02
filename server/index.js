const express = require("express"); //import using Common.js modules
require("./services/passport");

const app = express();

require("./route/authRoutes")(app);

//If enviroment variable is defined by host, assign to 'PORT'; else assign 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
