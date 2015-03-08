// App = Ember.Application.create({});
require.config({
	paths: {
    	jquery: 'lib/jquery/dist/jquery.min',
    	EmberTemplates: 'lib/ember/ember-template-compiler',
    	Ember: 'lib/ember/ember',
    	domReady: 'lib/requirejs-domready/domReady'
    	// text: 'vendor/text',
    	// hbs: 'vendor/hbs'
  	},
  	shim: {
	    Ember: {
	      deps: ['EmberTemplates', 'jquery'],
	      exports: 'Ember'
	    }
  	}
});


require(["domReady", "Ember"], function(domReady, Ember){
	domReady(function(){
		console.log("domeReady");
		App = Ember.Application.create({});
		require(["views/appView"], function(AppView){
			AppView.create({
				title: "World"
			}).appendTo("body");
		})
	});
});