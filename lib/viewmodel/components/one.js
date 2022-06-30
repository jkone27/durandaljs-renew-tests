"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("durandal/app"));

var _knockout = _interopRequireDefault(require("knockout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const one = {
  name: _knockout.default.observable(),
  sayHello: function sayHello() {
    _app.default.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
  }
};
var _default = one;
exports.default = _default;