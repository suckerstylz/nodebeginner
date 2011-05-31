var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/dummynames');

var Schema = mongoose.Schema
	,	ObjectId = Schema.ObjectId;
	
var Names = new Schema({
	name: { type: String, default: 'John Doe' },
	age: { type: Number, min: 18, default: 18 }     
});

mongoose.model('Names', Names);

module.exports = db.model('Names');