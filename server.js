var http = require('http');
var app = require8('./app');

http.createServer(app.handleRequest).listen(8000);