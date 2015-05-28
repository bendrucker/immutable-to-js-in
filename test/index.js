'use strict'

import test from 'tape'
import {fromJS} from 'immutable'
import toJSIn from '../'

test((t) => {
  t.deepEqual(toJSIn(fromJS({foo: {bar: 'baz'}}), ['foo']), {
    bar: 'baz'
  })
  t.equal(toJSIn(fromJS({foo: 'bar'}), ['foo']), 'bar')
  t.end()
})
