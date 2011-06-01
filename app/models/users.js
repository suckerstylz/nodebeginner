var mongoose = require('mongoose');

var Schema = mongoose.Schema
	,	ObjectId = Schema.ObjectId;
	
var Users = new Schema({
	name: { type: String, default: 'John Doe' },
	age: { type: Number, min: 18, default: 18 }     
});

mongoose.model('Users', Users);

module.exports = global.db.model('Users');