Ironball is a wrapper function that lets you use chained method calls with any object.

## How do I use it?

Consider the following object `obj` that is lacking built-in support for chained method calls.
```
const obj = {
  foo: () => console.log('foo'),
  bar: () => console.log('bar'),
};
```

You can use Ironball to call the methods of `obj` in a chain as follows.
```
ironball(obj)
  .foo()
  .bar();
```
