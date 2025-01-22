function foo(x) {
  if (x == null) {
    return 0; // This will return 0 for both null and undefined
  } else {
    return x.length;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: TypeError: Cannot read properties of undefined (reading 'length')