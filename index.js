var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};

handle['/'] = requestHandlers.dashboard;
handle['/dashboard'] = requestHandlers.dashboard;
handle['/login'] = requestHandlers.login;
handle['/logout'] = requestHandlers.logout;
handle['/mite'] = requestHandlers.mite;
handle['/upload'] = requestHandlers.upload;
handle['/names'] = requestHandlers.names;

server.start(router.route, handle);