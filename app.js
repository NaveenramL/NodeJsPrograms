console.log("Hello World");

var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Node Js......... ");
    response.write(" https://nodejs.org/en");
    response.end();
}).listen(8900);