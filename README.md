ember-chosen
============

Easy integration for Chosen v1.1.0 with Ember v1.5+. It goes without saying that you need Chosen and Ember for this to work.

Usage
------

**Template:**

```
{{chosen
  content=view.businessesArray
  optionLabelPath='content.name'
  optionValuePath='content.id'
  prompt='Choose...'
  selection=business // Use business.content if item is gotten via a promise
}}
```

**View:**

```
App.FormView = Em.View.extend({
  businessesArray: Em.A([]),
  
  setBusinessesArray: function() {
    var _this = this;
    
    _this.get('controller.store').find('business').then(function(businesses) {
      _this.set('businessesArray', array);
    }
  }.on('willInsertElement'),
})
```

The result is that the business property on your controller content will be the business selected using the chosen component. When you run `this.get('content').save()` in your controller, it will save the new information.

All [Em.Select](http://emberjs.com/api/classes/Ember.Select) properties, methods, etc, are available to use with the Chosen View.
