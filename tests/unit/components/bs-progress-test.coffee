`import Ember from 'ember'`
`import { test, moduleForComponent } from 'ember-qunit'`
`import startApp from "../../helpers/start-app"`


moduleForComponent('bs-progress', {
  needs: ['component:bs-progress']
})


test('is it there?', (assert) ->
  component = @subject
  this.$()
  assert.ok(component?)
  return
)