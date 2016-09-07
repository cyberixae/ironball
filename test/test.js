'use strict';

/* eslint-disable no-unused-expressions */


const expect = require('chai').expect;
const ironball = require('../src/ironball.js');

describe('Turning an object into an ironball', () => {
  it('should add support for chained method calls', () => {
    let sideEffects = '';
    const object = {
      foo: () => {
        sideEffects += 'foo';
        return null;
      },
      bar: () => {
        sideEffects += 'bar';
        return null;
      },
      quux: () => {
        sideEffects += 'quux';
        return null;
      },
    };
    ironball(object).foo().bar().quux();
    expect(sideEffects).to.equal('foobarquux');
  });
  it('should have no effect on regular properties', () => {
    const object = {
      foo: 123,
    };
    expect(ironball(object).foo).to.equal(123);
  });
});

