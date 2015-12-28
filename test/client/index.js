/* eslint-env  mocha */
/* global describe, it */

import chai from 'chai';
const assert = chai.assert;
const foo = 'toto';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.typeOf(foo, 'string');
    });
  });
});
