`import Ember from 'ember'`
`import { test, moduleForComponent } from 'ember-qunit'`
`import startApp from "../../helpers/start-app"`


moduleForComponent('bs-page-header',
  needs: ['component:bs-page-header']
)


test('is it there?', (assert) ->
  component = @subject
  this.$()
  assert.ok(component?)
)
