const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', usersSchema);
module.exports = User
