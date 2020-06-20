'use strict';

// using http //

const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('This is the http program');
}).listen(8081);

console.log('server running at http://localhost:8081');
