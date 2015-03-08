define("views/appView", ["hbs!appTemplate"], function(AppTemplate){
	return Ember.View.extend({	
		template: AppTemplate
	});
});
