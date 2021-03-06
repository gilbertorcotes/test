"use Strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	email: String,
	password: String,
});

module.exports = mongoose.model("User", UserSchema);