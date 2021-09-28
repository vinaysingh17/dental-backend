const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  area_of_practise: {
    type: String,
    required: true,
  },
  subscription : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscription'
  },
  expiry_date : {
    type : Date
  },
  resetLink: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model("User", userSchema);
