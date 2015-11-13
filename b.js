var net = require("net");

var client = net.connect({port:8124},function(){
	console.log("client connect");
	client.write("world");
});

client.on("data", function(data){
	client.write("你好");
});

client.on("end", function(){
	console.log("client disconnect");
});

client.on("timeout", function(){
	console.log("timeout");
});

