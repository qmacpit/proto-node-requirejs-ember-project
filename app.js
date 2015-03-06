/*
 *	MODULE DEPENDENCIES
 */
var express = require('express');	

var app = express(),
	server = require('http').Server(app),
	io = require("socket.io")(server);

require("./configuration")(app);
require("./routes/api")(app);

server.listen(3000, function(err) {
	console.log("server is listening...")
})