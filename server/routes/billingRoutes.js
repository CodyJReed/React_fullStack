const express = require("passport");
// Require config/keys file to access Strip Secret
const keys = require("../config/keys");
// Require Stripe and assign Secret Key
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

// Create new Route for handling Credit Card Charges between client react-stripe-checkout & server
// Pass requireLogin function reference to call on incoming requests to verify user exists
module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits @ Feedback Campaign",
      // Value is obtained using npm module "body.parser" assigned as express middleware in server index.js
      source: req.body.id
    });

    req.user.credits += 5;
    // Update copy of current User
    const user = await req.user.save();

    // return user model
    res.send(user);
  });
};
