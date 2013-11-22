// mongoose API for talking to mongoDB
var mongoose = require('mongoose');

// Connect to local database
mongoose.connect('mongodb://localhost/newapp');

// Define DB Schema and model
var User = mongoose.model('users', {
		userName: String
});

// Exports 'User' model
module.exports.User = User;