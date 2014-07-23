ember-chosen
============

Easy integration for Chosen v1.1.0 with Ember v1.5+. It goes without saying that you need Chosen and Ember for this to work.

Installation
------

Ember-CLI integration is coming soon but, for now, grab `ember-chosen.js` and `templates/chosen-select.hbs`.

Usage
------

**Template:**

```
{{chosen
  content=businessesArray
  optionLabelPath='content.name'
  optionValuePath='content.id'
  prompt='Choose...'
  selection=business // Use business.content if item is gotten via a promise
}}
```

**Controller (or view or route):**

Obviously you can bind the content array however you please, but below is an example:

```
App.FormController = Em.ObjectController.extend({
  businessesArray: Em.A(),
  
  init: function() {
    this.setBusinessesArray();
    this._super();
  },
  
  setBusinessesArray: function() {
    var _this = this;
    
    // Set the array
    _this.get('controller.store').find('business').then(function(businesses) {
      _this.set('businessesArray', businesses);
    }
  },
})
```

The result is that the business property on your controller content will be the business selected using the chosen component. When you run `this.get('content').save()` in your controller, it will save the new information.

All [Em.Select](http://emberjs.com/api/classes/Ember.Select) properties, methods, etc, are available to use with the Chosen View.
