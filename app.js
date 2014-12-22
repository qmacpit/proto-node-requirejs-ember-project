/*
 *	MODULE DEPENDENCIES
 */
var express = require('express');	

var app = express(),
	server = require('http').Server(app),
	io = require("socket.io")(server);

require("./configuration")(app);

server.listen(7777, function(err) {
	console.log("server is listening...")
})