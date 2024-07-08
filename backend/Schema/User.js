const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  // email: { type: String, required: true },
  password: { type: String, required: true },
  KYCVerified: { type: Boolean, default: false },
  balance:{
    type: Number,
    required: false,
    default: 100000
  }
},
{
  timestamps: true,
}
  // Add more fields as needed

  
);

module.exports = mongoose.model('User', userSchema);
