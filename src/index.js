'use strict'

import {Iterable} from 'immutable'
const {isIterable} = Iterable

export default function toJSIn (iterable, keyPath) {
  const data = iterable.getIn(keyPath)
  return isIterable(data) ? data.toJS() : data
}
