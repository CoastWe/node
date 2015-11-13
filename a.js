var net = require("net");
var server = net.createServer(function(socket){
	socket.on("data",function(data){
		socket.write("nihao");
	});
	socket.on("end", function(){
		console.log("断开连接");
	});
	socket.on("connection", function(){
		socket.write("欢迎光临");
	})
	socket.write("欢迎光临");
});

server.listen(8124,function(){
	console.log("server is start");
});