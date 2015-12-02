`import Ember from 'ember'`
`import Nav from 'ember-cli-bscomponents/mixins/nav'`
`import template from '../bs-common/itemslist.template'`
`import SelectableItems from '../../mixins/selectable-items'`

BsPills = Ember.Component.extend(Nav, SelectableItems, {
  navType: 'pills'
  classNameBindings: ['stacked:nav-stacked', 'justified:nav-justified']
  attributeBindings: ['style']

  template: template
  itemComponent: 'bs-pill'
})

`export default BsPills`
