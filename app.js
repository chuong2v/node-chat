import socketIO from 'socket.io';
import express from 'express';
import bodyPaser from 'body-parser';
import http from 'http';
let app = express();

let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => console.log("Server is running at port", port))

let io = socketIO(server);

io.on('connection', function(client){
	client.join('chat-room');
  client.on('message', function(data){
  	console.log(data);
  });
  client.on('disconnect', function(){
  	console.log('disconnected.')
  });
});

server.listen(3000);
