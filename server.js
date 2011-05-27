var express = require('express');

var app = module.exports = express.createServer().configure(function(){
		
		this.set('views', __dirname + '/views');
		this.set('view engine', 'mustache');
		this.set('view options', { layout: false });
		this.register('.mustache', require('stache'));
		this.use(express.bodyParser());
		this.use(express.methodOverride());
		this.use(express.cookieParser());
		this.use(express.session({ secret: '  ' }));
		this.use(express.static( __dirname + '/public' ));
		this.use(this.router);
		this.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
		
	});
	
if(module.parent) {
	app.listen(8000);
	console.log('Server has started at port 8000');
}