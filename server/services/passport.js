const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");
// Take User and create cookie using Mongo generated id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record with the given ID
          done(null, existingUser);
        } else {
          // Create new User and store id in googleId
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
