var url = require('url');
var express = require('express');

function start(route, handle){

var app = module.exports = express.createServer(onRequest).configure(function(){
		
		this.set('views', __dirname + '/views');
		this.set('view engine', 'mustache');
		this.set('view options', { layout: false });
		this.register('.mustache', require('stache'));
		this.use(express.bodyParser());
		this.use(express.methodOverride());
		this.use(express.cookieParser());
		this.use(express.session({ secret: '  ' }));
		this.use(this.router);
		this.use(express.static(__dirname + '/public'));
		this.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	});
	
	if(module.parent) {
		app.listen(8000);
		console.log('Server has started at port 8000');
	}
	
	function onRequest(req, res){
		var postData = '';
		var pathname = url.parse(req.url).pathname;
		if(pathname != '/favicon.ico') {
			console.log('Req for ' + pathname + ' received');
			req.setEncoding('utf8');
			req.addListener('data', function(postDataChunk){
				postData += postDataChunk;
				console.log('Reveived POST data chunk "' + postDataChunk + '" .');
			});
			req.addListener('end', function(){
				route(handle, pathname, res, postData);
			});
		}
	}	
}

exports.start = start;