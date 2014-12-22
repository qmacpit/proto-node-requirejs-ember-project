/*
 *	MODULE DEPENDENCIES
 */
var express = require('express'),
	path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, 'public')));

 server.listen(7777, function(err) {
 	console.log("server is listening...")
 })