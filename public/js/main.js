// App = Ember.Application.create({});
require.config({
	paths: {
    	jquery: 'lib/jquery/dist/jquery.min',
    	EmberTemplates: 'lib/ember/ember-template-compiler',
    	Ember: 'lib/ember/ember',
    	domReady: 'lib/requirejs-domready/domReady',
    	text: 'lib/requirejs-text/text',
    	hbs: 'hbs'
  	},
  	shim: {
	    Ember: {
	      deps: ['EmberTemplates', 'jquery'],
	      exports: 'Ember'
	    }
  	}
});


require(["domReady", "Ember", "views/appView"], function(domReady, Ember, AppView){
	domReady(function(){
		console.log("domeReady");
		App = Ember.Application.create({});
	
		AppView.create({
			title: "World"
		}).appendTo("body");
	})
});