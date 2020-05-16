const mongoose = require('mongoose');

const merchantSchema = mongoose.Schema({
  UserType: {type: String , required: true},
  MerchantName: {type: String , required: true},
  BranchName: {type: String , required: true},
  Location: {type: String , required: true},
  CurrentStatus: {type: String , required: true}

});


module.exports = mongoose.model('Merchant',merchantSchema);
