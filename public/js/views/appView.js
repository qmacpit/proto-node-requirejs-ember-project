define("views/appView", ["Ember", "text!templates/appTemplate.hbs"], function(Ember, AppTemplate){
	return Ember.View.extend({	
		template: Ember.Handlebarscomplie(AppTemplate)
	});
});
