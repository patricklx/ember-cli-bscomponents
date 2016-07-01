define('ember-bscomponents-showcase/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-bscomponents-showcase/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-bscomponents-showcase/tests/helpers/start-app', 'ember-bscomponents-showcase/tests/helpers/destroy-app'], function (exports, _qunit, _emberBscomponentsShowcaseTestsHelpersStartApp, _emberBscomponentsShowcaseTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberBscomponentsShowcaseTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberBscomponentsShowcaseTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-bscomponents-showcase/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/not.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/not.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/not.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/resolver', ['exports', 'ember-bscomponents-showcase/resolver', 'ember-bscomponents-showcase/config/environment'], function (exports, _emberBscomponentsShowcaseResolver, _emberBscomponentsShowcaseConfigEnvironment) {

  var resolver = _emberBscomponentsShowcaseResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberBscomponentsShowcaseConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberBscomponentsShowcaseConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-bscomponents-showcase/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/helpers/start-app', ['exports', 'ember', 'ember-bscomponents-showcase/app', 'ember-bscomponents-showcase/config/environment'], function (exports, _ember, _emberBscomponentsShowcaseApp, _emberBscomponentsShowcaseConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberBscomponentsShowcaseConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberBscomponentsShowcaseApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-bscomponents-showcase/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 2, col 8, \'Ember\' is defined but never used.\n\n1 error');
  });
});
define('ember-bscomponents-showcase/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-alert/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-alert/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-alert/component.js should pass jshint.\nsite/components/docs/bs-alert/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-alert/component.js: line 5, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-breadcrumbs/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-breadcrumbs/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-breadcrumbs/component.js should pass jshint.\nsite/components/docs/bs-breadcrumbs/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-breadcrumbs/component.js: line 5, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-btn-group/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-btn-group/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-btn-group/component.js should pass jshint.\nsite/components/docs/bs-btn-group/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-btn-group/component.js: line 6, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-list-group/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-list-group/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-list-group/component.js should pass jshint.\nsite/components/docs/bs-list-group/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-list-group/component.js: line 5, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-modal/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-modal/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-modal/component.js should pass jshint.\nsite/components/docs/bs-modal/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-modal/component.js: line 21, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-modal/test/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-modal/test/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-modal/test/component.js should pass jshint.\nsite/components/docs/bs-modal/test/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-modal/test/component.js: line 12, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-pagination/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-pagination/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-pagination/component.js should pass jshint.\nsite/components/docs/bs-pagination/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-pagination/component.js: line 3, col 42, Missing semicolon.\n\n2 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-panel/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-panel/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'site/components/docs/bs-panel/component.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-popover/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-popover/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-popover/component.js should pass jshint.\nsite/components/docs/bs-popover/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-popover/component.js: line 10, col 54, Missing semicolon.\nsite/components/docs/bs-popover/component.js: line 12, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-progress/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-progress/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-progress/component.js should pass jshint.\nsite/components/docs/bs-progress/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-progress/component.js: line 9, col 39, Missing semicolon.\nsite/components/docs/bs-progress/component.js: line 11, col 24, Missing semicolon.\nsite/components/docs/bs-progress/component.js: line 15, col 3, Missing semicolon.\n\n4 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-tabs/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-tabs/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-tabs/component.js should pass jshint.\nsite/components/docs/bs-tabs/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-tabs/component.js: line 10, col 54, Missing semicolon.\nsite/components/docs/bs-tabs/component.js: line 12, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/components/docs/bs-tooltip/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/components/docs/bs-tooltip/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'site/components/docs/bs-tooltip/component.js should pass jshint.\nsite/components/docs/bs-tooltip/component.js: line 1, col 26, Missing semicolon.\nsite/components/docs/bs-tooltip/component.js: line 9, col 54, Missing semicolon.\nsite/components/docs/bs-tooltip/component.js: line 11, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('ember-bscomponents-showcase/tests/site/index/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | site/index/controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'site/index/controller.js should pass jshint.');
  });
});
define('ember-bscomponents-showcase/tests/test-helper', ['exports', 'ember-bscomponents-showcase/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberBscomponentsShowcaseTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberBscomponentsShowcaseTestsHelpersResolver['default']);
});
define('ember-bscomponents-showcase/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-bscomponents-showcase/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map