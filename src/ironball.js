'use strict';

function ironball(core) {
  const proxy = new Proxy(core, {
    get: (target, property, receiver) => {
      const original = target[property];
      if (typeof original !== 'function') {
        return original;
      }
      return (...args) => {
        Reflect.apply(original, proxy, args);
        return proxy;
      };
    },
  });
  return proxy;
}

module.exports = ironball;
