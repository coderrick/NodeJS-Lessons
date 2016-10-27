/**
 * 
 * Credit to the thenewboston
 * https://www.youtube.com/watch?v=pYOltVz7kL0
 * 
 */
var http = require('http');
var fs = require('fs');

function send404Response(response){
  response.writeHead(404, {"Content-Type" : "text/plain"});
  response.write("Error 404: Page not found");
  response.end();
}

//Note client always makes 2 requests. Request for favicon is sent in the background?
function onRequest(request, response){
    if (request.method == 'GET' && request.url == '/'){
        console.log('A user made a request' + request.url);
        response.writeHead(200, { "Content-Type": "text/plain" });
        fs.createReadStream('./resources/chaos-sonic-adventure.jpg').pipe(response);

    }else if(request.method == 'GET' && request.url == '/image'){
        console.log('A user made a request' + request.url);
        response.writeHead(200, { "Content-Type": "image/gif" });
        fs.createReadStream('./resources/chaos-sonic-adventure.jpg').pipe(response);

    }else if(request.method == 'GET' && request.url == '/video'){
        console.log('A user made a request' + request.url);
        response.writeHead(200, { "Content-Type": "image/gif" });
        fs.createReadStream('./resources/chaos-sonic-adventure.jpg').pipe(response);

    }else if(request.method == 'GET' && request.url == '/audio'){
        console.log('A user made a request' + request.url);
        response.writeHead(200, { "Content-Type": "image/gif" });
        fs.createReadStream('./resources/chaos-sonic-adventure.jpg').pipe(response);
        
    }else{
        send404Response(response);
    }
}

//Create HTTP Server and have it listen on port 8888
http.createServer(onRequest).listen(8888);
console.log('Server is running on port 8888');