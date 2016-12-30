var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(con){
    console.log('a new connection is established');
    con.on('text', function(msg){
        server.connections.forEach(connection => connection.sendText(msg));
    });
});
server.listen(9090);
console.log('socket server listening on port 9090');