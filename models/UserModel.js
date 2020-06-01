var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	number: Number
});

module.exports = mongoose.model('User', UserSchema);
