const mongoose = require("mongoose");
// Destructure Schema = mongoose.Schema
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});
// Create a Model Class titled users, holding the Model Instance of userSchema
mongoose.model("recipients", recipientSchema);
