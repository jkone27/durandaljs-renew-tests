define(["exports", "durandal/app", "knockout"], function (_exports, _app, _knockout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _app = _interopRequireDefault(_app);
  _knockout = _interopRequireDefault(_knockout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const one = {
    name: _knockout.default.observable(),
    sayHello: function sayHello() {
      _app.default.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
    }
  };
  var _default = one;
  _exports.default = _default;
});