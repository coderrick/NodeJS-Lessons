/**
 * 
 * Credit to the thenewboston
 * https://www.youtube.com/watch?v=pYOltVz7kL0
 * 
 */

var http = require('http');

//Note client always makes 2 requests. Request for favicon is sent in the background?
function onRequest(request, response){
    console.log('A user made a request' + request.url);
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Here is the response data");
    response.end();
}

//Create HTTP Server and have it listen on port 8888
http.createServer(onRequest).listen(8888);
console.log('Server is running on port 8888');