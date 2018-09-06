const express = require("express"); //import using Common.js modules
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

// Connect Mongoose to Mongo using provided DB URI stored as mongoURI
mongoose.connect(keys.mongoURI);

const app = express();

// Applied Middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like main.js file, or main.class
  app.use(express.static("client/build"));

  // Express will serve up index.html
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "html"));
  });
}

//If enviroment variable is defined by host, assign to 'PORT'; else assign 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
