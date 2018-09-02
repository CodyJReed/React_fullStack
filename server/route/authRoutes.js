const passport = require("passport");

module.exports = app => {
  // Route Handler for "Get" type
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // After GoogleStrategy has returned oAuth on "/auth/google/callback," run Route Handler with oAuth code
  app.get("/auth/google/callback", passport.authenticate("google"));
};
