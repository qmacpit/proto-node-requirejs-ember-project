// define("views/appView", ["Ember", "text!templates/appTemplate.hbs"], function(Ember, AppTemplate){
// 	return Ember.View.extend({	
// 		template: Ember.Handlebars.compile(AppTemplate)
// 	});
// });

define("views/appView", ["Ember", "hbs!appTemplate"], function(Ember, AppTemplate){
	return Ember.View.extend({	
		template: AppTemplate
	});
});
