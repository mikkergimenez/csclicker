'use strict';

define('cs-clicker/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 8, \'DS\' is defined but never used.\n\n1 error');
  });
});
define('cs-clicker/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('cs-clicker/tests/controllers/level.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/level.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/level.js should pass jshint.');
  });
});
define('cs-clicker/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('cs-clicker/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('cs-clicker/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'cs-clicker/tests/helpers/start-app', 'cs-clicker/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _csClickerTestsHelpersStartApp, _csClickerTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _csClickerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _csClickerTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('cs-clicker/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('cs-clicker/tests/helpers/resolver', ['exports', 'cs-clicker/resolver', 'cs-clicker/config/environment'], function (exports, _csClickerResolver, _csClickerConfigEnvironment) {

  var resolver = _csClickerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _csClickerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _csClickerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('cs-clicker/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('cs-clicker/tests/helpers/start-app', ['exports', 'ember', 'cs-clicker/app', 'cs-clicker/config/environment'], function (exports, _ember, _csClickerApp, _csClickerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _csClickerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _csClickerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('cs-clicker/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('cs-clicker/tests/models/level.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/level.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/level.js should pass jshint.');
  });
});
define('cs-clicker/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('cs-clicker/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('cs-clicker/tests/routes/level.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/level.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/level.js should pass jshint.');
  });
});
define('cs-clicker/tests/routes/levels.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/levels.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/levels.js should pass jshint.');
  });
});
define('cs-clicker/tests/routes/play.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/play.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/play.js should pass jshint.');
  });
});
define('cs-clicker/tests/test-helper', ['exports', 'cs-clicker/tests/helpers/resolver', 'ember-qunit'], function (exports, _csClickerTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_csClickerTestsHelpersResolver['default']);
});
define('cs-clicker/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('cs-clicker/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('cs-clicker/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('cs-clicker/tests/unit/controllers/level-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:level', 'Unit | Controller | level', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('cs-clicker/tests/unit/controllers/level-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/level-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/level-test.js should pass jshint.');
  });
});
define('cs-clicker/tests/unit/models/level-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('level', 'Unit | Model | level', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('cs-clicker/tests/unit/models/level-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/level-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/level-test.js should pass jshint.');
  });
});
define('cs-clicker/tests/unit/routes/levels-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:levels', 'Unit | Route | levels', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('cs-clicker/tests/unit/routes/levels-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/levels-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/levels-test.js should pass jshint.');
  });
});
define('cs-clicker/tests/unit/routes/play-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:play', 'Unit | Route | play', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('cs-clicker/tests/unit/routes/play-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/play-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/play-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('cs-clicker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map