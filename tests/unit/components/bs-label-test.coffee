`import Ember from 'ember'`
`import { test, moduleForComponent } from 'ember-qunit'`
`import startApp from "../../helpers/start-app"`


moduleForComponent('bs-label',
  needs: ['component:bs-label']
)


test('is it there?', (assert) ->
  component = @subject
  assert.ok(component?)
)
