define("views/appView", [], function(){
	return Ember.View.extend({	
		template: Ember.Handlebars.compile("<h4>Hello {{view.title}}</h4>")
	});
});
