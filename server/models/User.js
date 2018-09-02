const mongoose = require("mongoose");
// Destructure Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// Create a Model Class titled users, holding the Model Instance of userSchema
mongoose.model("users", userSchema);
