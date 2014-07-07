App.UnboundSelectOptionView = Ember.SelectOption.extend({
  template: Ember.Handlebars.compile('{{unbound view.label}}'),

  label: function() {
    return this;
  }.property(),
});

App.ChosenSelectView = Em.Select.extend({
  templateName: 'chosen_select',
  attributeBindings: ['prompt:data-placeholder'],

  watch: function() {
    Em.run.sync();
    Em.run.scheduleOnce('afterRender', this, function() {
      this.$().trigger('chosen:updated');
    });
  }.observes('content.@each.data'), // If content is a property on the view you can just use content.[]

  renderSelectize: function() {
    this.$().chosen();
  }.on('didInsertElement'),

});
