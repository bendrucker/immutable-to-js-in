'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = toJSIn;

var _immutable = require('immutable');

'use strict';

var isIterable = _immutable.Iterable.isIterable;

function toJSIn(iterable, keyPath) {
  var data = iterable.getIn(keyPath);
  return isIterable(data) ? data.toJS() : data;
}

module.exports = exports['default'];