const mongoose = require("mongoose");
// Destructure Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  githubId: String,
  credits: { type: Number, default: 0 }
});

// Create a Model Class titled users, holding the Model Instance of userSchema
mongoose.model("users", userSchema);
