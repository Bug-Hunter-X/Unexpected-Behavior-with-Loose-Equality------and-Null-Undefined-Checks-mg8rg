# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript error related to loose equality (==) when checking for null values.  The bug arises from the fact that `null == undefined` evaluates to `true` in JavaScript.  This can lead to unexpected behavior if you're not careful about handling null and undefined separately.

## Bug Description
The provided code attempts to handle null values gracefully by returning 0 if the input is null.  However, it fails when an undefined value is passed because the code tries to access the length property of undefined, resulting in a TypeError.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the TypeError when `undefined` is passed to the function.

## Solution
The solution involves using strict equality (===) to differentiate between null and undefined and handle them appropriately.