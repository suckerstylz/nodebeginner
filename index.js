var server = require('./app/server');
var router = require('./app/router');
var requestHandlers = require('./app/requestHandlers');

router.route(server, requestHandlers);