define("views/appView", ["text!templates/appTemplate.hbs"], function(AppTemplate){
	return Ember.View.extend({	
		template: Ember.Handlebars.compile(AppTemplate)
	});
});
