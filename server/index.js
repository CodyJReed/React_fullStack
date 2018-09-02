const express = require("express"); //import using Common.js modules
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

//If enviroment variable is defined by host, assign to 'PORT'; else assign 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
