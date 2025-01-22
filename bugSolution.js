function foo(x) {
  if (x === null) {
    return 0; // Returns 0 only when x is explicitly null
  } else if (x === undefined) {
    return -1; //Or handle undefined differently
  } else {
    return x.length;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo([1,2,3])); //Output: 3