'use strict';

// using http //

const http = require ("http");

http.createServer(function(request, response){
    response.writehead(200,{'content type': 'text/plain'});

    response.end('My First Web Server')
}).listen(8081);

console.log('server running at http : //localhost:8081');
