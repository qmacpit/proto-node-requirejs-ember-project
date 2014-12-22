$(function(){
	_io = io.connect();

    _io.on('disconnect', function() {
    	$("#webSocketStatusInfo").html("disconnected").removeClass("label-success").addClass("label-danger");
    });

    _io.on('connect', function() {
    	$("#webSocketStatusInfo").html("connected").removeClass("label-danger").addClass("label-success");
    });
});