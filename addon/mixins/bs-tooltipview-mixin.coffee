`import Ember from 'ember'`
`import TooltipBoxManager from 'ember-cli-bscomponents/services/tooltip-box-manager'`

BsTooltipViewMixin = Ember.Mixin.create
  attributeBindings: [TooltipBoxManager::attribute]
  didInsertElement: () ->
    data = this.get("bsTooltipData")
    type = this.get("bsTooltipType")
    manager = @container.lookup('service:tooltip-box-manager')
    manager.addFromView(this, type, data)


`export default BsTooltipViewMixin`
