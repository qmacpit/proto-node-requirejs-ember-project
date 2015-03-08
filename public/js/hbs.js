define({
  load: function(name, req, load, config) {
    req(['Ember', 'text!templates/' + name + '.hbs'], function(Ember, text) {    	
      load(Ember.Handlebars.compile(text));
    });
  }
});