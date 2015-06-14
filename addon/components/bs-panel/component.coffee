`import Ember from 'ember'`
`import TypeSupport from 'ember-cli-bscomponents/mixins/type'`

BsPanelComponent = Ember.Component.extend(TypeSupport,
  layoutName: 'components/bs-panel'
  classNames: ['panel']
  classTypePrefix: ['panel']
  classNameBindings: ['fade', 'fade:in']
  clicked: null
  onClose: null
  fade: true
  collapsible: false
  open: true

  actions:
    close: (event) ->
      @sendAction('onClose')
      @$().removeClass('in')
      #TODO: Causes ' Object #<HTMLDivElement> has no method 'destroyElement' '
      #@$().one($.support.transition.end, @destroy).emulateTransitionEnd(150)
      #Workaround
      setTimeout (->
        @destroy()
      ).bind(@), 250

  click: (event) ->
    @sendAction('clicked', event)

  collapsibleBodyId: (->
    "#{@get('elementId')}_body"
  ).property('collapsible')

  collapsibleBodyLink: (->
    "##{@get('elementId')}_body"
  ).property('collapsibleBodyId')
)

`export default BsPanelComponent`
