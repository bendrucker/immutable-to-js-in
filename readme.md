# immutable-to-js-in [![Build Status](https://travis-ci.org/bendrucker/immutable-to-js-in.svg?branch=master)](https://travis-ci.org/bendrucker/immutable-to-js-in) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/immutable-to-js-in.svg)](https://greenkeeper.io/)

> `toJSIn` method for `immutable.Iterable`


## Install

```
$ npm install --save immutable-to-js-in
```


## Usage

```js
var toJSIn = require('immutable-to-js-in')
var Map = require('immutable').Map
var map = new Map({foo: 'bar'})
toJSIn(map, ['foo']) // => bar
```

## API

### `toJSIn(map, keyPath)` -> `Any`

#### `map`

*Required*  
Type: `string`

The [Map](http://facebook.github.io/immutable-js/docs/#/Map) to serialize.

#### `keyPath`

*Required*  
Type: `Array` / `Iterable`  

The key path to serialize.


## License

MIT © [Ben Drucker](http://bendrucker.me)
