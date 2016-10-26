var http = require('http');


//Create HTTP Server and have it listen on port 8888
http.createServer(onRequest).listen(8888);
console.log('Server is running on port 8888');