const RecipientSchema = require("./Recipient");
const mongoose = require("mongoose");
// Destructure Schema = mongoose.Schema
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  // Use of SDC = SubDirectoryCollection
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, defaults: 0 },
  // Tie surveySchema to unique "User" Id
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});
// Create a Model Class titled users, holding the Model Instance of userSchema
mongoose.model("surveys", surveySchema);
