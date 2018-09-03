const passport = require("passport");

module.exports = app => {
  // Route Handler for "Get" type
  app.get(
    "/auth/google",
    // "google" reference to GoogleStrategy
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // After GoogleStrategy has returned oAuth on "/auth/google/callback," run Route Handler with oAuth code
  app.get("/auth/google/callback", passport.authenticate("google"));

  //
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // Route Handler for "Get" type
  app.get(
    "/auth/github",
    // "github" reference to GithubStrategy
    passport.authenticate("github")
  );

  // After GithubStrategy has returned oAuth on "/auth/github/callback," run Route Handler with oAuth code
  app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/" }),
    (req, res) => {
      // Successful authentication, redirect.
      res.redirect("/api/current_user");
    }
  );

  //
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
