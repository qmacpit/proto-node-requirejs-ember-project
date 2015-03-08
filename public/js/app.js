define("app", ["views/appView"], function(AppView){	

	return {
		init: function(){
			AppView.create({
				title: "World"
			}).appendTo("body");
		}
	}
});
