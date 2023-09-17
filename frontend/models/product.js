const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  batchID: {
    type: Number,
    required: true,
  },
  medName: {
    type: String,
    required: true,
    trim: true,
  },
  sealOn: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length (adjust as needed)
  },
  count:{
    type:String,
    required:true,
  },
  a:{
    type:String,
    req:true,
  }
},{timestamps:true});


export const User =mongoose.model('User', userSchema);
