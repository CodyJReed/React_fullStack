const express = require("express"); //import using Common.js modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();


passport.use(new, GoogleStrategy());
// Route Handler for "Get" type


//If enviroment variable is defined by host, assign to 'PORT'; else assign 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
