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
  		// EmberTemplates: {
  		// 	exports: 'EmberTemplates'
  		// },
	    Ember: {
	      deps: ['EmberTemplates', 'jquery'],
	      exports: 'Ember'
	    }
  	},
 //  	map: {
 //   		'*':{
 //        	'emberTemplates': 'EmberTemplates'
 //   		}
	// }
});


require(["domReady", "Ember", "app"], function(domReady, Ember, App){
	domReady(function(){
		console.log("domeReady");
		Ember.Application.create({});		
		App.init();
	})
});