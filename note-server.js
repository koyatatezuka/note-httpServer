const http = require('http');

const linkRequest = require('./htmlRequest/request');

const PORT = 3000;

http.createServer(linkRequest).listen(PORT);
