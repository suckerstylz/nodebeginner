var Name = Backbone.Model.extend({});

var Names = Backbone.Collection.extend({
	model: Name
});

var names = new Names;

var NamesView = Backbone.View.extend({
	events: { 'submit #nameSubmit' : 'handleName' },
	
	handleName: function(data){
		var inputField = $('input[name=nameText]');
		names.create({content: inputField.val()});
		inputField.val('');
	},
	
	render: function(){
		var data = names.fetch();
		console.log(data);
		//$('#nameList').append('<li>'+data+'</li>');
	}
});