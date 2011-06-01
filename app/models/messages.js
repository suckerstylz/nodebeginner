var mongoose = require('mongoose');

var Schema = mongoose.Schema
		,ObjectId = Schema.ObjectId;
	
var Messages = new Schema({
	userId: { type: String, default: 'bm' },
	message: { type: String, default: 'empty Text' },
	messageType: { type: String, default: 'message' },
	date: { type: Date, default: Date.now }
});

mongoose.model('Messages', Messages);

module.exports = global.db.model('Messages');