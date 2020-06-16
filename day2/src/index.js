'use stirct';

const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('my first web server');
}).listen(8081);

console.log('Server running at http://localhost:8081/');

